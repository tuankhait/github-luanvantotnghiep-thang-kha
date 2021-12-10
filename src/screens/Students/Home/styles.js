import {Platform, StyleSheet} from 'react-native';
import colors from '../../../shared/themes/colors';
import size from '../../../shared/themes/size';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';
// const Xphone =
//   getStatusBarHeight() > 24 && Platform.OS === 'ios' ? getStatusBarHeight() : 0;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  ViewTitle: {
    flexDirection: 'row',
    paddingHorizontal: size.REAL_SIZE_16,
    paddingVertical: size.REAL_SIZE_8,
    backgroundColor:colors.BLUE_MAIN
  },
  ViewTxtTitle: {
    marginLeft: size.REAL_SIZE_12,
    justifyContent: 'center',

  },
  TxtHello: {
    fontSize: size.REAL_SIZE_12,
    color: colors.WHITE,
    lineHeight: size.REAL_SIZE_20,
  },
  TxtNameUser: {
    fontSize: size.REAL_SIZE_14,
    color: colors.WHITE,
    fontWeight: '800',
    lineHeight: size.REAL_SIZE_20,
  },
  titleApp: {
    alignSelf: 'center',
    marginTop: size.REAL_SIZE_20,
    marginBottom: size.REAL_SIZE_108,
  },
  btnFunction: {
    width: (size.WIDTH - size.REAL_SIZE_16 - size.REAL_SIZE_40) / 2,
    height: (size.WIDTH - size.REAL_SIZE_16 - size.REAL_SIZE_30) / 2,
    borderRadius: size.REAL_SIZE_24,
    marginRight: size.REAL_SIZE_16,
    marginBottom: size.REAL_SIZE_24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUE_RGBA,
    alignSelf: 'center',
  },
  styFlatlist: {
    alignSelf: 'center',
    marginLeft: size.REAL_SIZE_14,
    marginTop: size.HEIGHT > 700 ? size.REM * 60 : size.REM * 40,
    marginBottom: size.REAL_SIZE_20,
  },
  txtNameListFunction: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: size.REAL_SIZE_12,
    lineHeight: size.REAL_SIZE_20,
    fontWeight: 'bold',
    color: colors.BLUE_1865c7,
    fontSize: size.REAL_SIZE_15,
    marginTop: size.REAL_SIZE_6,
  },
});
