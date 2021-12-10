import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const BG_COLOR_HEADER = '#89c4e4';
const SIZE_TXT_HEADER = 20;

export default StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: BG_COLOR_HEADER,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: SIZE_TXT_HEADER,
    color: "white",
  },
  leftH: {
    flex: 1,
  },
  buttonBack: {
    padding: 10,
  },
});
