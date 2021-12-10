import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
import DataApi from '../../../services/api-service/DataApi';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
const TotalSubject = ({ navigation, route }) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
    const authReducer = useSelector(state => state.authReducer);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function postData() {
      setIsShowLoading(true);

      if (authReducer?.userInfo?.SV_MSSV) {
        const resSubject = await DataApi.postDataMaster(
          {
            mssv: authReducer?.userInfo?.SV_MSSV,
          },
          { function: 'getMonHocCuaSinhVienByMSSV' },
        );
        if (resSubject?.msg == 'OK') {
          setData(resSubject?.data)
        }
      } else Alert.alert('Không có dữ liệu sinh viên');
      setIsShowLoading(false);
    }
    postData();
  }, []);
  //render Item home
  function renderItems({ item, index }) {
    return (
      <View key={item.id} style={[styles.btnFunction]}>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Tên Môn:'}</Text>
          <Text style={styles.txtDesListFunction}>
            {
              item?.MH_TEN
            }
          </Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Mã Môn:'}</Text>
          <Text style={styles.txtDesListFunction}>{item?.MH_ID}</Text>
        </View>
       
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header textHeader="Thông tin môn học" />
      <LoadingIndicator visible={isShowLoading} />
      <FlatList
        style={styles.styFlatlist}
        data={data}
        renderItem={renderItems}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};


export default TotalSubject;
