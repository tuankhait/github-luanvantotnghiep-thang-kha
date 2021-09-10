import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import LoadingIndicator from '../../components/Loading';
import {CommonActions} from '@react-navigation/native';
import {isEmail} from '../../shared/utils/convertData';

import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../shared/themes/colors';
import size from '../../shared/themes/size';
const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    username: 'khakha@gmail.com',
    password: '1234567',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [isShowLoading, setIsShowLoading] = useState(false);
  // const resetAction = CommonActions.reset({
  //   index: 0,
  //   routes: [{ name: 'Home' }],
  // });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: isEmail(val),
        isValidUser: isEmail(val),
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: isEmail(val),
        isValidUser: isEmail(val),
      });
    }
  };

  // thay đổi pass word và kiểm tra nó có lớn hơn 6 số khong
  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  // bật mở hiện
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // check email có đúng không , nếu không trả về false >4
  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: isEmail(val),
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  // hàm đăng nhập
  const loginHandle = async () => {
    const {username, password} = data;
    console.log('Login');
    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert(
        'Thông báo!',
        'Tên đăng nhập hoặc mật khẩu không được để trống.',
        [{text: 'Đồng ý'}],
      );
      return;
    } else {
      navigation.navigate('HomeScreenStudent');
      setIsShowLoading(true);
    }
  };

  return (
    // <SafeAreaView >
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{height: '100%', flex: 1}}>
      <LoadingIndicator visible={isShowLoading} />
      <Image
        source={require('../../images/nameLogin.png')}
        style={styles.ViewImageLogin}
      />
      <View style={{width: width, marginTop: size.REAL_SIZE_10, flex: 1}}>
        <Text style={styles.TxtCodeSV}>TÊN ĐĂNG NHẬP</Text>
        <View style={styles.ViewInput}>
          <Icon name="mail" color={colors.BLUE_MAIN} size={size.REAL_SIZE_20} />
          <TextInput
            placeholder="Tên đăng nhập..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={{
              paddingHorizontal: size.REAL_SIZE_10,
              marginRight: size.REAL_SIZE_10,
              width: width / 1.5,
            }}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            defaultValue={data.username}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather
                name="check-circle"
                color={colors.BLUE_MAIN}
                size={size.REAL_SIZE_20}
              />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Vui lòng nhập Tên đăng nhập hợp lệ
            </Text>
          </Animatable.View>
        )}
        <Text style={[styles.TxtCodeSV, {marginTop: size.REAL_SIZE_12}]}>
          MẬT KHẨU
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={{
              paddingHorizontal: size.REAL_SIZE_10,
              marginRight: size.REAL_SIZE_10,
              width: width - size.REM * 125,
            }}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
            defaultValue={data.password}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{justifyContent: 'flex-end'}}>
            {data.secureTextEntry ? (
              <Feather
                name="eye-off"
                color={colors.BLUE_MAIN}
                size={size.REAL_SIZE_20}
              />
            ) : (
              <Feather
                name="eye"
                color={colors.BLUE_MAIN}
                size={size.REAL_SIZE_20}
              />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Mật khẩu phải có ít nhất 6 ký tự.
            </Text>
          </Animatable.View>
        )}
        <TouchableOpacity
          onPress={() => {
            loginHandle(data.username, data.password);
          }}
          style={styles.TouchLogin}>
          <Text style={styles.TxtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    // </SafeAreaView>
  );
};
export default Login;
