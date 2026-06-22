import { useCallback, useEffect, useState } from 'react';
import {
  getCachedProEntitlement,
  grantCachedProEntitlement,
  isProEntitlementCacheLoaded,
  loadCachedProEntitlement,
  subscribeProEntitlement,
  type ProEntitlement,
  type ProEntitlementSource,
} from '../pro/pro-store';

export interface ProStore {
  entitlement: ProEntitlement;
  isLoaded: boolean;
  grantPro: (source: ProEntitlementSource) => Promise<void>;
}

export function useProStore(): ProStore {
  const [entitlement, setEntitlement] = useState<ProEntitlement>(getCachedProEntitlement());
  const [isLoaded, setIsLoaded] = useState(isProEntitlementCacheLoaded());

  useEffect(() => {
    const unsubscribe = subscribeProEntitlement((next) => {
      setEntitlement(next);
      setIsLoaded(true);
    });

    loadCachedProEntitlement().then((loaded) => {
      setEntitlement(loaded);
      setIsLoaded(true);
    });

    return unsubscribe;
  }, []);

  const grantPro = useCallback(async (source: ProEntitlementSource) => {
    await grantCachedProEntitlement(source);
  }, []);

  return { entitlement, isLoaded, grantPro };
}
