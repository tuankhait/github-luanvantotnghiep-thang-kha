import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const BG_COLOR_HEADER = 'blue';
const SIZE_TXT_HEADER = 20;

export default StyleSheet.create({
  header: {
    height: 50,
    // backgroundColor: BG_COLOR_HEADER,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: SIZE_TXT_HEADER,
    color: BG_COLOR_HEADER,
  },
  leftH: {
    flex: 1,
  },
  buttonBack: {
    padding: 10,
  },
});
