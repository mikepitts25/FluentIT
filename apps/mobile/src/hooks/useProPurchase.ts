import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  finishTransaction,
  useIAP,
  type Product,
  type Purchase,
} from 'expo-iap';
import { requireOptionalNativeModule } from 'expo-modules-core';
import { PRO_PRODUCT_ID } from '../pro/pro-config';
import type { ProEntitlementSource } from '../pro/pro-store';

type PurchaseEntitlementSource = Extract<ProEntitlementSource, 'purchase' | 'restore'>;
const canUseNativeIap =
  process.env.EXPO_OS === 'ios' && Boolean(requireOptionalNativeModule('ExpoIap'));

function purchaseMatchesProduct(purchase: Purchase, productId: string): boolean {
  return purchase.productId === productId || purchase.ids?.includes(productId) === true;
}

function isUnavailableNativeModuleError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return (
    message.includes("Cannot find native module 'ExpoIap'") ||
    message.includes('ExpoIap') && message.toLowerCase().includes('unavailable')
  );
}

export interface ProPurchaseState {
  buyPro: () => Promise<void>;
  displayPrice: string;
  isAvailable: boolean;
  isConnected: boolean;
  isProcessing: boolean;
  product: Product | null;
  restorePro: () => Promise<void>;
  statusMessage: string | null;
}

export function useProPurchase(options: {
  grantPro: (source: PurchaseEntitlementSource) => Promise<void>;
  isPro: boolean;
  productId?: string;
}): ProPurchaseState {
  if (!canUseNativeIap) return useUnavailableProPurchase(options);
  return useNativeProPurchase(options);
}

function useUnavailableProPurchase({
  isPro,
}: {
  grantPro: (source: PurchaseEntitlementSource) => Promise<void>;
  isPro: boolean;
  productId?: string;
}): ProPurchaseState {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const unavailableMessage = process.env.EXPO_OS === 'ios'
    ? 'In-app purchases require an iOS development or TestFlight build.'
    : 'Pro Mode purchase is currently enabled for iPhone builds only.';

  const showUnavailableMessage = useCallback(async () => {
    if (!isPro) setStatusMessage(unavailableMessage);
  }, [isPro, unavailableMessage]);

  return {
    buyPro: showUnavailableMessage,
    displayPrice: 'Buy once',
    isAvailable: false,
    isConnected: false,
    isProcessing: false,
    product: null,
    restorePro: showUnavailableMessage,
    statusMessage,
  };
}

function useNativeProPurchase({
  grantPro,
  isPro,
  productId = PRO_PRODUCT_ID,
}: {
  grantPro: (source: PurchaseEntitlementSource) => Promise<void>;
  isPro: boolean;
  productId?: string;
}): ProPurchaseState {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isNativeUnavailable, setIsNativeUnavailable] = useState(false);
  const isIos = true;

  const handlePurchaseSuccess = useCallback(
    async (purchase: Purchase) => {
      if (!purchaseMatchesProduct(purchase, productId)) return;

      await grantPro('purchase');
      await finishTransaction({ purchase, isConsumable: false });
      setStatusMessage('Pro Mode unlocked.');
      setIsProcessing(false);
    },
    [grantPro, productId],
  );

  const {
    availablePurchases,
    connected,
    fetchProducts,
    getAvailablePurchases,
    products,
    reconnect,
    requestPurchase,
    restorePurchases,
  } = useIAP({
    onPurchaseSuccess: handlePurchaseSuccess,
    onPurchaseError: (error) => {
      setIsProcessing(false);
      setStatusMessage(error.message || 'Purchase was not completed.');
    },
    onError: (error) => {
      if (isUnavailableNativeModuleError(error)) {
        setIsNativeUnavailable(true);
        setStatusMessage('In-app purchases require an iOS development or TestFlight build.');
        return;
      }

      setStatusMessage(error.message || 'The App Store is unavailable right now.');
    },
  });

  const product = useMemo(
    () => products.find((item) => item.id === productId) ?? null,
    [productId, products],
  );

  useEffect(() => {
    if (!isIos || !connected || isPro) return;

    fetchProducts({ skus: [productId], type: 'in-app' }).catch((error: unknown) => {
      if (isUnavailableNativeModuleError(error)) setIsNativeUnavailable(true);
    });
  }, [connected, fetchProducts, isIos, isPro, productId]);

  useEffect(() => {
    if (isPro) return;

    const restoredPurchase = availablePurchases.find((purchase) => (
      purchaseMatchesProduct(purchase, productId)
    ));
    if (!restoredPurchase) return;

    grantPro('restore').then(() => {
      setStatusMessage('Pro Mode restored.');
    });
  }, [availablePurchases, grantPro, isPro, productId]);

  const ensureConnected = useCallback(async (): Promise<boolean> => {
    if (connected) return true;

    try {
      return await reconnect();
    } catch (error) {
      if (isUnavailableNativeModuleError(error)) {
        setIsNativeUnavailable(true);
        setStatusMessage('In-app purchases require an iOS development or TestFlight build.');
        return false;
      }

      setStatusMessage(error instanceof Error ? error.message : 'Could not connect to the App Store.');
      return false;
    }
  }, [connected, reconnect]);

  const buyPro = useCallback(async () => {
    if (isPro) return;
    if (!isIos) {
      setStatusMessage('Pro Mode purchase is currently enabled for iPhone builds only.');
      return;
    }

    setIsProcessing(true);
    const isStoreConnected = await ensureConnected();
    if (!isStoreConnected) {
      setIsProcessing(false);
      return;
    }

    try {
      await requestPurchase({
        type: 'in-app',
        request: {
          apple: { sku: productId },
          google: { skus: [productId] },
        },
      });
    } catch (error) {
      setIsProcessing(false);
      if (isUnavailableNativeModuleError(error)) {
        setIsNativeUnavailable(true);
        setStatusMessage('In-app purchases require an iOS development or TestFlight build.');
        return;
      }

      setStatusMessage(error instanceof Error ? error.message : 'Purchase was not completed.');
    }
  }, [ensureConnected, isIos, isPro, productId, requestPurchase]);

  const restorePro = useCallback(async () => {
    if (isPro) return;
    if (!isIos) {
      setStatusMessage('Restore is currently enabled for iPhone builds only.');
      return;
    }

    setIsProcessing(true);
    const isStoreConnected = await ensureConnected();
    if (!isStoreConnected) {
      setIsProcessing(false);
      return;
    }

    try {
      await restorePurchases();
      await getAvailablePurchases();
      setStatusMessage('Checking App Store purchases...');
    } catch (error) {
      if (isUnavailableNativeModuleError(error)) {
        setIsNativeUnavailable(true);
        setStatusMessage('In-app purchases require an iOS development or TestFlight build.');
      } else {
        setStatusMessage(error instanceof Error ? error.message : 'Restore was not completed.');
      }
    } finally {
      setIsProcessing(false);
    }
  }, [ensureConnected, getAvailablePurchases, isIos, isPro, restorePurchases]);

  return {
    buyPro,
    displayPrice: product?.displayPrice ?? 'Buy once',
    isAvailable: isIos && !isNativeUnavailable,
    isConnected: connected,
    isProcessing,
    product,
    restorePro,
    statusMessage,
  };
}
