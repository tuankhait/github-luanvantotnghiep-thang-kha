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
} from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import authActions from '../../../core/redux/actions/authActions';
import {CommonActions} from '@react-navigation/native';
const ProfileStudent = ({navigation, route}) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: 'Login'}],
  });
  const [isShowLoading, setIsShowLoading] = useState(false);
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  //đăng xuất
  const handleLogOut = () => {
    dispatch(authActions.logout());
    navigation.dispatch(resetAction);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header backBtnEnable={true} textHeader="Thông tin cá nhân" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewContainerImage}>
          <View style={styles.viewImage} />
          <Image
            source={require('../../../images/ImageAvatar.png')}
            style={styles.imageAvatar}
          />
        </View>
        <Text style={styles.txtNameUser}>
          {authReducer?.userInfo?.SV_HOTEN}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangeUserInfo');
          }}
          style={styles.changeUserInfo}>
          <Text style={styles.txtUserInfo}>Thông tin cá nhân</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
          style={styles.changeUserInfo}>
          <Text style={styles.txtUserInfo}>Thay đổi mật khẩu</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleLogOut()}
        style={styles.buttonLogout}>
        <Text style={[styles.txtUserInfo, {color: 'white'}]}>ĐĂNG XUẤT</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ProfileStudent;
