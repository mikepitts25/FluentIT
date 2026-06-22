import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@fluentit:pro_entitlement';

export type ProEntitlementSource = 'purchase' | 'restore' | 'local';

export interface ProEntitlement {
  isPro: boolean;
  unlockedAt?: string;
  source?: ProEntitlementSource;
}

export const DEFAULT_PRO_ENTITLEMENT: ProEntitlement = {
  isPro: false,
};

type ProEntitlementListener = (entitlement: ProEntitlement) => void;

const proListeners = new Set<ProEntitlementListener>();
let cachedProEntitlement = DEFAULT_PRO_ENTITLEMENT;
let hasLoadedCachedProEntitlement = false;
let loadCachedProEntitlementPromise: Promise<ProEntitlement> | null = null;
let proEntitlementRevision = 0;

export async function loadProEntitlement(): Promise<ProEntitlement> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PRO_ENTITLEMENT;
    return { ...DEFAULT_PRO_ENTITLEMENT, ...(JSON.parse(raw) as Partial<ProEntitlement>) };
  } catch {
    return DEFAULT_PRO_ENTITLEMENT;
  }
}

export async function saveProEntitlement(entitlement: ProEntitlement): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entitlement));
}

export function getCachedProEntitlement(): ProEntitlement {
  return cachedProEntitlement;
}

export function isProEntitlementCacheLoaded(): boolean {
  return hasLoadedCachedProEntitlement;
}

export function subscribeProEntitlement(listener: ProEntitlementListener): () => void {
  proListeners.add(listener);
  return () => {
    proListeners.delete(listener);
  };
}

export function cacheProEntitlement(entitlement: ProEntitlement): ProEntitlement {
  proEntitlementRevision += 1;
  cachedProEntitlement = entitlement;
  hasLoadedCachedProEntitlement = true;
  proListeners.forEach((listener) => listener(entitlement));
  return entitlement;
}

export async function loadCachedProEntitlement(): Promise<ProEntitlement> {
  if (hasLoadedCachedProEntitlement) return cachedProEntitlement;
  if (loadCachedProEntitlementPromise) return loadCachedProEntitlementPromise;

  const loadRevision = proEntitlementRevision;
  loadCachedProEntitlementPromise = loadProEntitlement()
    .then((entitlement) => {
      if (hasLoadedCachedProEntitlement && proEntitlementRevision !== loadRevision) {
        return cachedProEntitlement;
      }

      return cacheProEntitlement(entitlement);
    })
    .finally(() => {
      loadCachedProEntitlementPromise = null;
    });

  return loadCachedProEntitlementPromise;
}

export function createGrantedProEntitlement(
  source: ProEntitlementSource,
  now = new Date(),
): ProEntitlement {
  return {
    isPro: true,
    unlockedAt: now.toISOString(),
    source,
  };
}

export async function grantCachedProEntitlement(
  source: ProEntitlementSource,
): Promise<ProEntitlement> {
  const next = cacheProEntitlement(createGrantedProEntitlement(source));
  await saveProEntitlement(next);
  return next;
}
