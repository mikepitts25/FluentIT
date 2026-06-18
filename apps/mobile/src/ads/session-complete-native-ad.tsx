import { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import type { NativeAd } from 'react-native-google-mobile-ads';
import { C } from '../theme';
import {
  getSessionCompleteNativeAdUnitId,
  resolvePlatformNativeAdUnitId,
} from './ad-config';

type GoogleMobileAdsModule = typeof import('react-native-google-mobile-ads');

const IOS_SESSION_COMPLETE_NATIVE_AD_UNIT_ID = 'ca-app-pub-5950430918685177/7938736743';
const ADS_DISABLED = process.env.EXPO_PUBLIC_ADMOB_DISABLED === 'true';
const FORCE_TEST_ADS = process.env.EXPO_PUBLIC_ADMOB_FORCE_TEST_ADS === 'true';
const SHOW_AD_PLACEHOLDER = process.env.EXPO_PUBLIC_ADMOB_SHOW_AD_PLACEHOLDER === 'true';
const CARD_SIDE_INSET = 28;
const CARD_VERTICAL_EXTRA_SPACE = 260;

export function SessionCompleteNativeAd() {
  const { width: windowWidth } = useWindowDimensions();
  const [adsModule, setAdsModule] = useState<GoogleMobileAdsModule | null>(null);
  const [nativeAd, setNativeAd] = useState<NativeAd | null>(null);
  const [loadState, setLoadState] = useState<'loading' | 'hidden' | 'failed'>('loading');
  const adWidth = Math.max(280, Math.min(360, Math.floor(windowWidth - 56)));
  const contentWidth = adWidth - CARD_SIDE_INSET * 2;
  const mediaHeight = Math.max(158, Math.floor(contentWidth * 9 / 16));
  const minAdHeight = mediaHeight + CARD_VERTICAL_EXTRA_SPACE;

  useEffect(() => {
    let isMounted = true;
    let loadedAd: NativeAd | null = null;

    async function loadAd() {
      try {
        const ads = require('react-native-google-mobile-ads') as GoogleMobileAdsModule;
        const adUnitId = getSessionCompleteNativeAdUnitId({
          adsEnabled: !ADS_DISABLED,
          forceTestAds: FORCE_TEST_ADS,
          isDev: typeof __DEV__ !== 'undefined' ? __DEV__ : process.env.NODE_ENV !== 'production',
          nativeAdUnitId: resolvePlatformNativeAdUnitId({
            envNativeAdUnitId: process.env.EXPO_PUBLIC_ADMOB_SESSION_COMPLETE_NATIVE_UNIT_ID,
            iosNativeAdUnitId: IOS_SESSION_COMPLETE_NATIVE_AD_UNIT_ID,
            platform: Platform.OS,
          }),
          testNativeAdUnitId: ads.TestIds.NATIVE,
        });

        if (!adUnitId) {
          if (isMounted) setLoadState('hidden');
          return;
        }

        const initializeMobileAds = ads.default ?? ads;
        await initializeMobileAds().initialize();

        const ad = await ads.NativeAd.createForAdRequest(adUnitId, {
          keywords: ['IT training', 'cloud', 'cybersecurity', 'devops', 'certification'],
          startVideoMuted: true,
        });

        if (!isMounted) {
          ad.destroy();
          return;
        }

        loadedAd = ad;
        setAdsModule(ads);
        setNativeAd(ad);
      } catch (error) {
        if (isMounted) setLoadState('failed');
        if (typeof __DEV__ !== 'undefined' && __DEV__) {
          console.warn('Session complete native ad failed to load', error);
        }
      }
    }

    void loadAd();

    return () => {
      isMounted = false;
      loadedAd?.destroy();
    };
  }, []);

  if (!adsModule || !nativeAd) {
    if (!SHOW_AD_PLACEHOLDER) return null;
    return <SessionCompleteAdPlaceholder state={loadState} width={adWidth} />;
  }

  const { NativeAdView, NativeAsset, NativeAssetType, NativeMediaView } = adsModule;

  return (
    <NativeAdView
      nativeAd={nativeAd}
      style={[styles.card, { width: adWidth, minHeight: minAdHeight }]}
    >
      <View style={styles.inner}>
        <View style={[styles.header, { width: contentWidth }]}>
          {nativeAd.icon && (
            <NativeAsset assetType={NativeAssetType.ICON}>
              <Image source={{ uri: nativeAd.icon.url }} style={styles.icon} />
            </NativeAsset>
          )}
          <View style={styles.titleBlock}>
            <View style={styles.labelRow}>
              <Text style={styles.adBadge}>Ad</Text>
            </View>
            <NativeAsset assetType={NativeAssetType.HEADLINE}>
              <Text style={styles.headline} numberOfLines={2}>
                {nativeAd.headline}
              </Text>
            </NativeAsset>
          </View>
        </View>

        <NativeMediaView
          style={[styles.media, { width: contentWidth, height: mediaHeight }]}
          resizeMode="contain"
        />

        <NativeAsset assetType={NativeAssetType.BODY}>
          <Text style={[styles.body, { width: contentWidth }]} numberOfLines={3}>
            {nativeAd.body}
          </Text>
        </NativeAsset>

        {nativeAd.callToAction && (
          <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>
            <Text style={[styles.cta, { width: contentWidth }]}>{nativeAd.callToAction}</Text>
          </NativeAsset>
        )}
      </View>
    </NativeAdView>
  );
}

function SessionCompleteAdPlaceholder({
  state,
  width,
}: {
  state: 'loading' | 'hidden' | 'failed';
  width: number;
}) {
  const message = state === 'loading'
    ? 'Loading sponsored content...'
    : 'Sponsored content unavailable';

  return (
    <View style={[styles.card, styles.placeholderCard, { width }]}>
      <Text style={styles.placeholderBadge}>Ad placement</Text>
      <Text style={styles.placeholderTitle}>{message}</Text>
      <Text style={styles.placeholderBody}>
        This slot appears here after a session. TestFlight builds can force Google test ads for validation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.borderCard,
    backgroundColor: C.bgCard,
    paddingTop: 14,
    paddingBottom: 24,
  },
  inner: {
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 9,
  },
  titleBlock: {
    flex: 1,
    gap: 4,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  adBadge: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: C.amber + '22',
    borderWidth: 1,
    borderColor: C.amber + '55',
    color: C.amber,
    fontSize: 11,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  headline: {
    color: C.textPrimary,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21,
  },
  media: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: C.bgPrimary,
    marginBottom: 10,
  },
  body: {
    color: C.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  cta: {
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: C.green,
    color: '#000000',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  placeholderCard: {
    borderStyle: 'dashed',
    alignItems: 'flex-start',
    paddingHorizontal: CARD_SIDE_INSET,
  },
  placeholderBadge: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: C.cyan + '18',
    borderWidth: 1,
    borderColor: C.cyan + '55',
    color: C.cyan,
    fontSize: 11,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  placeholderTitle: {
    color: C.textPrimary,
    fontSize: 16,
    fontWeight: '800',
  },
  placeholderBody: {
    color: C.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
