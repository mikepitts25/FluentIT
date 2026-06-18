export type SessionCompleteNativeAdConfig = {
  adsEnabled?: boolean;
  forceTestAds?: boolean;
  isDev: boolean;
  nativeAdUnitId?: string;
  testNativeAdUnitId: string;
};

export type NativeAdPlatform = 'android' | 'ios' | 'web' | 'windows' | 'macos';

export type PlatformNativeAdConfig = {
  androidNativeAdUnitId?: string;
  envNativeAdUnitId?: string;
  iosNativeAdUnitId?: string;
  platform: NativeAdPlatform | string;
};

export function getSessionCompleteNativeAdUnitId({
  adsEnabled = true,
  forceTestAds = false,
  isDev,
  nativeAdUnitId,
  testNativeAdUnitId,
}: SessionCompleteNativeAdConfig): string | null {
  if (!adsEnabled) return null;
  if (isDev || forceTestAds) return testNativeAdUnitId;

  const configuredAdUnitId = nativeAdUnitId?.trim();
  return configuredAdUnitId && configuredAdUnitId.length > 0 ? configuredAdUnitId : null;
}

export function resolvePlatformNativeAdUnitId({
  androidNativeAdUnitId,
  envNativeAdUnitId,
  iosNativeAdUnitId,
  platform,
}: PlatformNativeAdConfig): string | undefined {
  const configuredAdUnitId = envNativeAdUnitId?.trim();
  if (configuredAdUnitId && configuredAdUnitId.length > 0) return configuredAdUnitId;

  if (platform === 'ios') return iosNativeAdUnitId;
  if (platform === 'android') return androidNativeAdUnitId;

  return undefined;
}
