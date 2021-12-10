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

  styFlatlist: {
    alignSelf: 'center',
    marginTop: size.REAL_SIZE_14,
    marginBottom: size.REAL_SIZE_20,
  },
  btnFunction: {
    borderRadius: size.REAL_SIZE_8,
    marginHorizontal: size.REAL_SIZE_12,
    marginBottom: size.REAL_SIZE_8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    width: size.WIDTH - size.REAL_SIZE_24,
    paddingVertical: size.REAL_SIZE_12,
  },
  txtNameListFunction: {
    marginLeft: size.REAL_SIZE_12,
    lineHeight: size.REAL_SIZE_20,
    fontWeight: 'bold',
    color: colors.BLUE_1865c7,
    fontSize: size.REAL_SIZE_14,
    marginTop: size.REAL_SIZE_6,
    flex: 1/ 5
  },
  ViewDes: {
    flexDirection: 'row',
    flex: 1
  }, txtDesListFunction: {
    marginRight: size.REAL_SIZE_12,
    lineHeight: size.REAL_SIZE_20,
    color: colors.BLUE_1865c7,
    fontSize: size.REAL_SIZE_14,
    marginTop: size.REAL_SIZE_6,
    flex: 4/ 5
  },
});