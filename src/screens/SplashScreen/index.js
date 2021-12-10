import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
const SplashScreen = ({navigation}) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'Login'}],
  });
  useEffect(() => {
    const Time = setTimeout(() => {
      navigation.dispatch(resetAction);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('../../images/Logo.png')} style={styles.logo} />
        <Text
          style={[
            styles.title,
            {
              color: 'black',
              alignSelf:'center'
            },
          ]}>
          WELCOME TO APTECH INTERNATIONAL PROGRAMMER TRAINING CENTER!
        </Text>
      </View>
      <View style={styles.footer}>
        <Text
          style={[
            styles.text,
            {
              color: 'black',
            },
          ]}>
          From
        </Text>
        <Image
          source={require('../../images/nameLogin.png')}
          style={styles.logoFooter}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const {height, width} = Dimensions.get('screen');
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    marginTop: height * 0.15,
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 12,
    left: (width - 130) / 2,
  },
  logo: {
    width: (height_logo * 16) / 9,
    height: height_logo,
  },
  logoFooter: {
    width: 110,
    height: 110,
  },
  title: {
    marginTop: 25,
    color: '#05375a',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
  },
  text: {
    color: 'gray',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
  },
});
