import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import Header from '../../../components/Header';
import DataApi from '../../../services/api-service/DataApi';
import moment from 'moment';
const FaildSubject = ({ navigation, route }) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function postData() {
      setIsShowLoading(true);
      let arraySubjectPass = [];
      const resSubject = await DataApi.postDataMaster(
        {
          mssv: 'B16045',
        },
        { function: 'getMonHocCuaSinhVienByMSSV' },
      );
      if (resSubject?.msg == 'OK') {
        resSubject?.data?.map(async (item, index) => {
          const res = await DataApi.postDataMaster(
            {
              mssv: 'B16045',
              idMon: item?.MH_ID,
              checkbox: '0',
            },
            { function: 'getDataTotNghiepCuaSinhVienTheoMon' },
          );
          if (res?.msg == 'OK') {
            var array = arraySubjectPass.concat(res?.data);
            arraySubjectPass = array;
            if (index == resSubject?.data.length - 1) {
              setData(arraySubjectPass);
            }
          }
        });
      }
      setIsShowLoading(false);
    }
    postData();
  }, []);
  //render Item home
  function renderItems({ item, index }) {
    console.log("item", item)
    return (
      <View key={item.id} style={[styles.btnFunction]}>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Tên môn:'}</Text>
          <Text style={styles.txtDesListFunction}>
            {
              item?.MH_TEN
            }
          </Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Điểm thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{Number(item?.THI_DIEM) > 0 ? item?.THI_DIEM : 0}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Kết quả:'}</Text>
          <Text style={styles.txtDesListFunction}>{'Trượt'}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Lần thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{item?.KT_LANTHI}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Loại thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{item?.LOAITHI_TEN}</Text>
        </View>
        <View style={styles.ViewDes}>
          <Text style={styles.txtNameListFunction}>{'Ngày thi:'}</Text>
          <Text style={styles.txtDesListFunction}>{moment(item?.KT_NGAY?.date).format("DD/MM/YYYY")}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnEnable={true} textHeader="Thông tin điểm chưa đậu" />
      <LoadingIndicator visible={isShowLoading} />
      {data.length != 0 ? (
        <FlatList
          style={styles.styFlatlist}
          data={data}
          renderItem={renderItems}
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text
          style={{
            fontSize: 13,
            color: 'black',
            fontStyle: 'italic',
            alignSelf: 'center',
            marginTop: 12,
          }}>
          Danh sách trống
        </Text>
      )}
    </SafeAreaView>
  );
};


export default FaildSubject;
