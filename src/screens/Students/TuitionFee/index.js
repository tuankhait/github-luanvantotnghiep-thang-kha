import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
const TuitionFee = ({ navigation, route }) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const data = ['1', '1'];

  //render Item home
  function renderItems({ item, index }) {
    return (
      <View key={item.id} style={[styles.btnFunction]}>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Thanh toán ngày:'}</Text>
          <Text style={styles.txtDesListFunction}>
            {
              '01/01/2021'
            }
          </Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Ngày gia hạn:'}</Text>
          <Text style={styles.txtDesListFunction}>{'01/01/2021'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Số tiền:'}</Text>
          <Text style={styles.txtDesListFunction}>{'300.000 VND'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Số phiếu thu:'}</Text>
          <Text style={styles.txtDesListFunction}>{'232342'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Lần đóng:'}</Text>
          <Text style={styles.txtDesListFunction}>{'2'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Ghi chú:'}</Text>
          <Text style={styles.txtDesListFunction}>{'Đã đóng qua tài khoản'}</Text>
        </View>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnEnable={true} textHeader="Học phí" />
      <LoadingIndicator visible={isShowLoading} />
      <FlatList
        style={styles.styFlatlist}
        data={data}
        renderItem={renderItems}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};


export default TuitionFee;
