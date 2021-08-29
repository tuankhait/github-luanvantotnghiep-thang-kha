import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08d4c4',
  },
  ViewImageLogin: {
    width: 163 * 1.5,
    height: 163 * 1.5,
    alignSelf: 'center',
    marginTop: 40,
  },
  TxtCodeSV:{
    fontSize: 16, color: '#007cc3',
    marginHorizontal: 30,
    fontWeight: 'bold', 
    marginTop: 50,
    marginBottom: 6,

  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    borderWidth: 0.25,
    paddingHorizontal: 10,
    borderColor: '#007cc3',
    borderRadius: 8,
    paddingVertical: 2,
    backgroundColor:"#FFF"
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 12,
    marginHorizontal: 30,
    marginTop: 4,
  },
  TouchLogin: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#007cc3',
    paddingVertical: 12,
    borderRadius: 8,
  },
  TxtLogin: {
    color: 'white',
    fontFamily: 'SemiBold',
    fontSize: 20,
  },


});
