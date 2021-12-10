import React, { useState, useEffect } from 'react';
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
import size, { WIDTH, HEIGHT } from '../../../../shared/themes/size';
import colors from '../../../../shared/themes/colors';
import HeaderBase from '../../../../components/HeaderBase';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChangeUserInfo = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);
  const [data, setData] = React.useState({
    KHOA_TEN: authReducer?.userInfo?.KHOA_TEN,
    LOP_TEN: authReducer?.userInfo?.LOP_TEN,
    SV_HOTEN: authReducer?.userInfo?.SV_HOTEN,
    SV_MSSV: authReducer?.userInfo?.SV_MSSV,
    SV_PORTALID: authReducer?.userInfo?.SV_PORTALID,
  });
  const [isShowLoading, setIsShowLoading] = useState(false);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <HeaderBase backBtnEnable={true} textHeader="Thông tin sinh viên" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewContainerInstruct}></View>
        <Text style={[styles.TxtCodeSV, { marginTop: size.REAL_SIZE_12 }]}>
          HỌ VÀ TÊN
        </Text>
        <View style={[styles.ViewInput]} pointerEvents={'none'}>
          <FontAwesome
            name="user"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={styles.viewInputName}
            secureTextEntry={data.isValidPassword ? true : false}
            autoCapitalize="none"
            // onChangeText={val => handlePasswordChange(val, 1)}
            defaultValue={data.SV_HOTEN}
          />
        </View>
        <Text style={[styles.TxtCodeSV, { marginTop: size.REAL_SIZE_12 }]}>
          MÃ SINH VIÊN
        </Text>
        <View style={[styles.ViewInput]} pointerEvents={'none'}>
          <AntDesign
            name="idcard"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={styles.viewInputName}
            secureTextEntry={data.isValidPassword ? true : false}
            autoCapitalize="none"
            // onChangeText={val => handlePasswordChange(val, 1)}
            defaultValue={data.SV_MSSV}
          />
        </View>
        <Text style={[styles.TxtCodeSV, { marginTop: size.REAL_SIZE_12 }]}>
          LỚP
        </Text>
        <View style={[styles.ViewInput]} pointerEvents={'none'}>
          <MaterialCommunityIcons
            name="google-classroom"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={styles.viewInputName}
            secureTextEntry={data.isValidPassword ? true : false}
            autoCapitalize="none"
            // onChangeText={val => handlePasswordChange(val, 1)}
            defaultValue={data.LOP_TEN}
          />
        </View>
        <Text style={[styles.TxtCodeSV, { marginTop: size.REAL_SIZE_12 }]}>
          KHOA
        </Text>
        <View style={[styles.ViewInput]} pointerEvents={'none'}>
          <MaterialIcons
            name="class"
            color={colors.BLUE_MAIN}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            placeholder="Mật khẩu..."
            placeholderTextColor={colors.BLUE_MAIN}
            style={styles.viewInputName}
            secureTextEntry={data.isValidPassword ? true : false}
            autoCapitalize="none"
            // onChangeText={val => handlePasswordChange(val, 1)}
            defaultValue={data.KHOA_TEN}
          />
        </View>
      </ScrollView>
      {/* <TouchableOpacity
        onPress={() => handleUpdatePass()}
        style={styles.buttonLogout}>
        <Text style={[styles.txtUserInfo, {color: 'white'}]}>CẬP NHẬT</Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
};

export default ChangeUserInfo;
