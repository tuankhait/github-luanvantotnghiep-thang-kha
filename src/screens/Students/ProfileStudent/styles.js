import { Platform, StyleSheet } from 'react-native';
import colors from '../../../shared/themes/colors';
import size from '../../../shared/themes/size';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

// const Xphone =
//   getStatusBarHeight() > 24 && Platform.OS === 'ios' ? getStatusBarHeight() : 0;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainerImage:{
    marginTop: size.REAL_SIZE_20,
    height: size.REM * 150, width: size.WIDTH
  },

   viewImage:{
     marginTop: size.REAL_SIZE_96 / 2,
     // width: size.WIDTH,
     height: 0.5,
     backgroundColor: colors.LIGHT_PLACEHOLDER,
     marginHorizontal: size.REAL_SIZE_14,
  }, 
  imageAvatar:{
    height: size.REAL_SIZE_96,
    width: size.REAL_SIZE_96,
    borderRadius: size.REAL_SIZE_96,
    position: 'absolute',
    left: (size.WIDTH - size.REAL_SIZE_96) / 2,
    top: 0,
    backgroundColor: colors.WHITE,
  }
});
