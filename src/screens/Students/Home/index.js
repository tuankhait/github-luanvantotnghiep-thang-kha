import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  Platform,
} from 'react-native';
import styles from './styles';
import Sizes from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
const HomeScreenStudent = ({navigation, route}) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const ListScreen = [
    {
      id: 2,
      name: 'Môn đậu',
      onPress: () => { navigation.navigate("PassingSubject")},
      icon: require('../../../images/ImagePass.png'),
      count: Sizes.REAL_SIZE_72,
    },
    {
      id: 3,
      name: 'Môn chưa đậu',
      onPress: () => { navigation.navigate("FaildSubject") },
      icon: require('../../../images/ImageFaild.png'),
      count: Sizes.REAL_SIZE_80,
    },
    {
      id: 4,
      name: 'Học phí',
      onPress: () => { navigation.navigate("TuitionFee") },
      icon: require('../../../images/ImagePriceStudent.png'),
      count: Sizes.REAL_SIZE_80,
    },
    {
      id: 1,
      name: 'Thông tin sinh viên',
      onPress: () => { navigation.navigate("ProfileStudent") },
      icon: require('../../../images/ImageProfile.png'),
      count: Sizes.REAL_SIZE_96,
    },
  ];

  //render Item home
  function renderItems({item, index}) {
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.btnFunction]}
        onPress={() => item.onPress()}>
        <Image
          source={item.icon}
          style={{
            height: item.count,
            width: item.count,
            borderRadius: Sizes.REAL_SIZE_8,
          }}
        />
        <Text style={styles.txtNameListFunction}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' ? (
        <StatusBar
          translucent={false}
          backgroundColor={COLORS.WHITE}
          barStyle={'dark-content'}
          hidden={false}
        />
      ) : null}
      <LoadingIndicator visible={isShowLoading} />
      <ImageBackground
        source={require('../../../images/ImageLogin.png')}
        style={{height: Sizes.HEIGHT, width: Sizes.WIDTH}}>
        <View style={styles.ViewTitle}>
          <Image
            source={require('../../../images/ImageAvatar.png')}
            style={{
              height: Sizes.REAL_SIZE_80,
              width: Sizes.REAL_SIZE_80,
              borderRadius: Sizes.REAL_SIZE_8,
              borderWidth: 0.25,
            }}
          />
          <View style={styles.ViewTxtTitle}>
            <Text style={styles.TxtHello}>Xin chào!</Text>
            <Text style={styles.TxtNameUser}>Bạn</Text>
          </View>
        </View>
        <FlatList
          style={styles.styFlatlist}
          data={ListScreen}
          renderItem={renderItems}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreenStudent;
