import {Platform, StyleSheet} from 'react-native';
import colors from '../../../shared/themes/colors';
import size, {WIDTH} from '../../../shared/themes/size';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

// const Xphone =
//   getStatusBarHeight() > 24 && Platform.OS === 'ios' ? getStatusBarHeight() : 0;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainerImage: {
    marginTop: size.REAL_SIZE_20,
    height: size.REM * 150,
    width: size.WIDTH,
  },

  viewImage: {
    marginTop: size.REAL_SIZE_96 / 2,
    // width: size.WIDTH,
    height: 0.5,
    backgroundColor: colors.LIGHT_PLACEHOLDER,
    marginHorizontal: size.REAL_SIZE_14,
  },
  imageAvatar: {
    zIndex:2,
    height: size.REAL_SIZE_96,
    width: size.REAL_SIZE_96,
    borderRadius: size.REAL_SIZE_96,
    position: 'absolute',
    left: (size.WIDTH - size.REAL_SIZE_96) / 2,
    top: 0,
    backgroundColor: colors.WHITE,
  },
  txtNameUser: {
    alignSelf: 'center',
    color: colors.TEXT_COLOR,
    fontSize: 20,
    fontWeight: '900',
    marginTop: -55,
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
