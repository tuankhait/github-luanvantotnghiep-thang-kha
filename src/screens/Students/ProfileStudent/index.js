import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView , KeyboardAvoidingView, ScrollView, Image} from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
const ProfileStudent = ({ navigation, route }) => {
  const [isShowLoading, setIsShowLoading] = useState(false);


  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header backBtnEnable={true} textHeader="Thông tin cá nhân" />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.viewContainerImage}>
          <View
            style={styles.viewImage}
          />
            <Image
              source={require('../../../images/ImageAvatar.png')}
            style={styles.imageAvatar}
            />
          </View>
      </ScrollView>
        </KeyboardAvoidingView>
  );
};


export default ProfileStudent;
