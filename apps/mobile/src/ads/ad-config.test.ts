import { describe, expect, it } from 'vitest';
import {
  getSessionCompleteNativeAdUnitId,
  resolvePlatformNativeAdUnitId,
} from './ad-config';

describe('ad config', () => {
  it('uses the native test ad unit in development', () => {
    expect(
      getSessionCompleteNativeAdUnitId({
        isDev: true,
        testNativeAdUnitId: 'test-native-unit',
        nativeAdUnitId: 'production-native-unit',
      }),
    ).toBe('test-native-unit');
  });

  it('uses the configured native ad unit in production', () => {
    expect(
      getSessionCompleteNativeAdUnitId({
        isDev: false,
        testNativeAdUnitId: 'test-native-unit',
        nativeAdUnitId: ' production-native-unit ',
      }),
    ).toBe('production-native-unit');
  });

  it('can force the native test ad unit outside development', () => {
    expect(
      getSessionCompleteNativeAdUnitId({
        forceTestAds: true,
        isDev: false,
        testNativeAdUnitId: 'test-native-unit',
        nativeAdUnitId: 'production-native-unit',
      }),
    ).toBe('test-native-unit');
  });

  it('disables the placement when production has no native ad unit', () => {
    expect(
      getSessionCompleteNativeAdUnitId({
        isDev: false,
        testNativeAdUnitId: 'test-native-unit',
        nativeAdUnitId: ' ',
      }),
    ).toBeNull();
  });

  it('can disable ads explicitly', () => {
    expect(
      getSessionCompleteNativeAdUnitId({
        adsEnabled: false,
        isDev: true,
        testNativeAdUnitId: 'test-native-unit',
        nativeAdUnitId: 'production-native-unit',
      }),
    ).toBeNull();
  });
});

describe('resolvePlatformNativeAdUnitId', () => {
  it('prefers the environment ad unit when present', () => {
    expect(
      resolvePlatformNativeAdUnitId({
        envNativeAdUnitId: ' env-unit ',
        iosNativeAdUnitId: 'ios-unit',
        platform: 'ios',
      }),
    ).toBe('env-unit');
  });

  it('falls back to the configured iOS ad unit on iOS', () => {
    expect(
      resolvePlatformNativeAdUnitId({
        iosNativeAdUnitId: 'ios-unit',
        platform: 'ios',
      }),
    ).toBe('ios-unit');
  });

  it('does not use an iOS fallback on Android', () => {
    expect(
      resolvePlatformNativeAdUnitId({
        iosNativeAdUnitId: 'ios-unit',
        platform: 'android',
      }),
    ).toBeUndefined();
  });
});
