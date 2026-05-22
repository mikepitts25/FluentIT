import type { ImageSourcePropType } from 'react-native';
import type { Domain } from './content';

export const DOMAIN_ICON_IMAGES = {
  cyber: require('../assets/domain-icons/cyber.png'),
  devops: require('../assets/domain-icons/devops.png'),
  cloud: require('../assets/domain-icons/cloud.png'),
  networking: require('../assets/domain-icons/networking.png'),
  data: require('../assets/domain-icons/data.png'),
  ai: require('../assets/domain-icons/ai.png'),
  syseng: require('../assets/domain-icons/syseng.png'),
  coding: require('../assets/domain-icons/coding.png'),
  integration: require('../assets/domain-icons/integration.png'),
  agile: require('../assets/domain-icons/agile.png'),
  governance: require('../assets/domain-icons/governance.png'),
  observability: require('../assets/domain-icons/observability.png'),
  identity: require('../assets/domain-icons/identity.png'),
  architecture: require('../assets/domain-icons/architecture.png'),
  appsec: require('../assets/domain-icons/appsec.png'),
} satisfies Record<Domain, ImageSourcePropType>;

export function getDomainIconImage(domain: Domain): ImageSourcePropType {
  return DOMAIN_ICON_IMAGES[domain];
}
