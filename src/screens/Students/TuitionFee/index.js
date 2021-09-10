import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
const TuitionFee = ({ navigation, route }) => {
  const [isShowLoading, setIsShowLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnEnable={true} textHeader="Học phí" />

    </SafeAreaView>
  );
};


export default TuitionFee;
