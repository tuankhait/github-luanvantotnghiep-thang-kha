import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import size, {WIDTH, HEIGHT} from '../../../../shared/themes/size';
import colors from '../../../../shared/themes/colors';
import LoadingIndicator from '../../../../components/Loading';
import HeaderBase from '../../../../components/HeaderBase';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import authActions from '../../../../core/redux/actions/authActions';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DataApi from '../../../../services/api-service/DataApi';
const ChangePassword = ({navigation, route}) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'Login'}],
  });
  const [data, setData] = React.useState({
    password: '',
    newPassword: '',
    reNewPassword: '',
    isValidPassword: true,
    isValidNewPassword: true,
    isValidRePassword: true,
  });
  const [isShowLoading, setIsShowLoading] = useState(false);
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  const handlePasswordChange = (value, index) => {
    switch (index) {
      case 1:
        setData({...data, password: value});
        break;
      case 2:
        setData({ ...data, newPassword: value});
        break;
      case 3:
        setData({ ...data, reNewPassword: value});
        break;
      default:
        break;
    }
  };

  const updateSecureTextEntry = value => {
    switch (value) {
      case 1:
        setData({...data, isValidPassword: !data?.isValidPassword});
        break;
      case 2:
        setData({...data, isValidNewPassword: !data?.isValidNewPassword});
        break;
      case 3:
        setData({...data, isValidRePassword: !data?.isValidRePassword});
        break;
      default:
        break;
    }
  };

  const handleUpdatePass = async () => {

    if (data.password == authReducer?.password) {
      if (data.newPassword == data?.reNewPassword && data.newPassword) {
        const resUpdatePass = await DataApi.postDataMaster(
          {
            id: authReducer?.dataLogin?.id,
            password: data.newPassword,
          },
          {function: 'doiMatKhauUser'},
        );
        const message ="Thay doi mat khau thanh cong";
        if (resUpdatePass?.data == message && resUpdatePass?.msg =="OK" ){
          Alert.alert('Thay đổi mật khẩu thành công');
         await dispatch(authActions.changePass(data?.newPassword))
          setData({
            password: '',
            newPassword: '',
            reNewPassword: '',
            isValidPassword: true,
            isValidNewPassword: true,
            isValidRePassword: true,
          });


        }
      } else Alert.alert('Mật khẩu mới không trùng khớp, để trống và không phải lớn hơn 6 ký tự');
    } else Alert.alert('Mật khẩu không đúng');
  };
  const instruct =
    '  Bạn cần điền thông tin mật khẩu hiện tại, sau đó hãy điền mật khẩu mới và nhập lại mật khẩu. Đảm bảo rằng mặt khẩu mới trên 6 ký tự và không chứa ký tự đặc biệt ...';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <HeaderBase backBtnEnable={true} textHeader="Cập nhật mật khẩu" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewContainerInstruct}>
          <Text style={styles.txtInstruct}>{instruct}</Text>
        </View>
        <Text style={[styles.TxtCodeSV, {marginTop: size.REAL_SIZE_12}]}>
          MẬT KHẨU HIỆN TẠI
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
              width: WIDTH - size.REM * 100,
            }}
            secureTextEntry={data.isValidPassword ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val, 1)}
            defaultValue={data.password}
          />
          <TouchableOpacity
            onPress={() => updateSecureTextEntry(1)}
            style={{justifyContent: 'flex-end'}}>
            {data.isValidPassword ? (
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
        <Text style={[styles.TxtCodeSV, {marginTop: size.REAL_SIZE_12}]}>
          NHẬP MẬT KHẨU MỚI
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu mới..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={{
              paddingHorizontal: size.REAL_SIZE_10,
              marginRight: size.REAL_SIZE_10,
              width: WIDTH - size.REM * 100,
            }}
            secureTextEntry={data.isValidNewPassword ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val, 2)}
            defaultValue={data.newPassword}
          />
          <TouchableOpacity
            onPress={() => updateSecureTextEntry(2)}
            style={{justifyContent: 'flex-end'}}>
            {data.isValidNewPassword ? (
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
        <Text style={[styles.TxtCodeSV, {marginTop: size.REAL_SIZE_12}]}>
          NHẬP LẠI MẬT KHẨU MỚI
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Nhập lại mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={{
              paddingHorizontal: size.REAL_SIZE_10,
              marginRight: size.REAL_SIZE_10,
              width: WIDTH - size.REM * 100,
            }}
            secureTextEntry={data.isValidRePassword ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val, 3)}
            defaultValue={data.reNewPassword}
          />
          <TouchableOpacity
            onPress={() => updateSecureTextEntry(3)}
            style={{justifyContent: 'flex-end'}}>
            {data.isValidRePassword ? (
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
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleUpdatePass()}
        style={styles.buttonLogout}>
        <Text style={[styles.txtUserInfo, {color: 'white'}]}>CẬP NHẬT</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
