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
          Alert.alert('Thay ?????i m???t kh???u th??nh c??ng');
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
      } else Alert.alert('M???t kh???u m???i kh??ng tr??ng kh???p, ????? tr???ng v?? kh??ng ph???i l???n h??n 6 k?? t???');
    } else Alert.alert('M???t kh???u kh??ng ????ng');
  };
  const instruct =
    '  B???n c???n ??i???n th??ng tin m???t kh???u hi???n t???i, sau ???? h??y ??i???n m???t kh???u m???i v?? nh???p l???i m???t kh???u. ?????m b???o r???ng m???t kh???u m???i tr??n 6 k?? t??? v?? kh??ng ch???a k?? t??? ?????c bi???t ...';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <HeaderBase backBtnEnable={true} textHeader="C???p nh???t m???t kh???u" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewContainerInstruct}>
          <Text style={styles.txtInstruct}>{instruct}</Text>
        </View>
        <Text style={[styles.TxtCodeSV, {marginTop: size.REAL_SIZE_12}]}>
          M???T KH???U HI???N T???I
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="M???t kh???u..."
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
          NH???P M???T KH???U M???I
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="M???t kh???u m???i..."
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
          NH???P L???I M???T KH???U M???I
        </Text>
        <View style={[styles.ViewInput]}>
          <Icon
            name="md-lock-closed"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Nh???p l???i m???t kh???u..."
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
        <Text style={[styles.txtUserInfo, {color: 'white'}]}>C???P NH???T</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
