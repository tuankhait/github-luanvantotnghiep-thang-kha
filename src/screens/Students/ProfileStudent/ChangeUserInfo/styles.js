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
  viewInputName: {
    paddingHorizontal: size.REAL_SIZE_10,
    marginRight: size.REAL_SIZE_10,
    width: WIDTH - size.REM * 100,
    fontSize: 16,
    color: colors.BLUE_MAIN,
  },
});
