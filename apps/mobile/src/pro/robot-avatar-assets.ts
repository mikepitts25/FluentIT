import type { ImageSourcePropType } from 'react-native';
import type { RobotAvatarMilestone } from './robot-achievements';

export const ROBOT_AVATAR_IMAGES = {
  0: require('../../assets/robot-avatar/robot-000.png'),
  5: require('../../assets/robot-avatar/robot-005.png'),
  10: require('../../assets/robot-avatar/robot-010.png'),
  15: require('../../assets/robot-avatar/robot-015.png'),
  20: require('../../assets/robot-avatar/robot-020.png'),
  25: require('../../assets/robot-avatar/robot-025.png'),
  30: require('../../assets/robot-avatar/robot-030.png'),
  35: require('../../assets/robot-avatar/robot-035.png'),
  40: require('../../assets/robot-avatar/robot-040.png'),
  45: require('../../assets/robot-avatar/robot-045.png'),
  50: require('../../assets/robot-avatar/robot-050.png'),
  55: require('../../assets/robot-avatar/robot-055.png'),
  60: require('../../assets/robot-avatar/robot-060.png'),
  65: require('../../assets/robot-avatar/robot-065.png'),
  70: require('../../assets/robot-avatar/robot-070.png'),
  75: require('../../assets/robot-avatar/robot-075.png'),
  80: require('../../assets/robot-avatar/robot-080.png'),
  85: require('../../assets/robot-avatar/robot-085.png'),
  90: require('../../assets/robot-avatar/robot-090.png'),
  95: require('../../assets/robot-avatar/robot-095.png'),
  100: require('../../assets/robot-avatar/robot-100.png'),
} satisfies Record<RobotAvatarMilestone, ImageSourcePropType>;

export function getRobotAvatarImage(milestone: RobotAvatarMilestone): ImageSourcePropType {
  return ROBOT_AVATAR_IMAGES[milestone];
}
