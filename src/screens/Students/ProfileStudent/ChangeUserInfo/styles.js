import { Platform, StyleSheet } from 'react-native';
import colors from '../../../../shared/themes/colors';
import size, { WIDTH } from '../../../../shared/themes/size';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

// const Xphone =
//   getStatusBarHeight() > 24 && Platform.OS === 'ios' ? getStatusBarHeight() : 0;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainerInstruct: {
    marginTop: size.REAL_SIZE_20,
    // height: size.REM * 150,
    width: size.WIDTH,
    paddingHorizontal: size.REAL_SIZE_14,
  },
  txtInstruct: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
  TxtCodeSV: {
    fontSize: size.REAL_SIZE_14,
    color: colors.BLUE_MAIN,
    marginHorizontal: size.REAL_SIZE_14,
    fontWeight: 'bold',
    marginTop: size.REAL_SIZE_40,
    marginBottom: size.REAL_SIZE_6,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.REAL_SIZE_14,
    borderWidth: 0.25,
    paddingHorizontal: size.REAL_SIZE_10,
    borderColor: '#007cc3',
    borderRadius: size.REAL_SIZE_8,
    paddingVertical: 2,
    backgroundColor: '#FFF',
  },



  changeUserInfo: {
    height: size.REAL_SIZE_50,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    marginHorizontal: size.REAL_SIZE_12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: size.REAL_SIZE_10,
    shadowColor: '#000',
    marginVertical: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtUserInfo: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonLogout: {
    justifyContent: 'center',
    marginHorizontal: size.REAL_SIZE_50,
    height: size.REAL_SIZE_50,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: size.REAL_SIZE_10,
    shadowColor: '#000',
    marginVertical: 6,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.BLUE_MAIN,
  },
});
