import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../shared/themes/colors';
import size from '../../shared/themes/size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08d4c4',
  },
  ViewImageLogin: {
    width: size.REM * 163 * 1.2,
    height: size.REM * 163 * 1.2,
    alignSelf: 'center',
    marginTop: size.REAL_SIZE_36,
  },
  TxtCodeSV: {
    fontSize: size.REAL_SIZE_14,
    color: colors.BLUE_MAIN,
    marginHorizontal: size.REAL_SIZE_30,
    fontWeight: 'bold',
    marginTop: size.REAL_SIZE_40,
    marginBottom: size.REAL_SIZE_6,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.REAL_SIZE_30,
    borderWidth: 0.25,
    paddingHorizontal: size.REAL_SIZE_10,
    borderColor: '#007cc3',
    borderRadius: size.REAL_SIZE_8,
    paddingVertical: 2,
    backgroundColor: '#FFF',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: size.REAL_SIZE_10,
    marginHorizontal: size.REAL_SIZE_30,
    marginTop: size.REAL_SIZE_4,
  },
  TouchLogin: {
    marginHorizontal: size.REAL_SIZE_30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: size.REAL_SIZE_30,
    backgroundColor: '#007cc3',
    paddingVertical: size.REAL_SIZE_12,
    borderRadius: size.REAL_SIZE_8,
  },
  TxtLogin: {
    color: 'white',
    fontFamily: 'SemiBold',
    fontSize: size.REAL_SIZE_18,
  },
});
