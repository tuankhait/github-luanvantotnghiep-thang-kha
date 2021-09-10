import React, {useState} from 'react';
import {View, FlatList, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
const FaildSubject = ({navigation, route}) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const data = ['1', '1'];

  //render Item home
  function renderItems({item, index}) {
    return (
      <View key={item.id} style={[styles.btnFunction]}>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Tên môn:'}</Text>
          <Text style={styles.txtDesListFunction}>
            {
              'Lớp học react native react native Lớp học react native react native'
            }
          </Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Điểm thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{'12.00'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Kết quả:'}</Text>
          <Text style={styles.txtDesListFunction}>{'0'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Lần thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{'2'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Loại thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{'Lý thuyết'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Ngày thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{'01/01/2021'}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnEnable={true} textHeader="Thông tin điểm chưa đậu" />
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

export default FaildSubject;
