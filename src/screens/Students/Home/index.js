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
import Sizes, {WIDTH} from '../../../shared/themes/size';
import COLORS from '../../../shared/themes/colors';
import LoadingIndicator from '../../../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import TopTabNavigation from '../../../navigations/TopTabNavigation';
import colors from '../../../shared/themes/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeScreenStudent = ({navigation, route}) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const authReducer = useSelector(state => state.authReducer);
  const ListScreen = [
    {
      id: 2,
      name: 'Môn đậu',
      onPress: () => {
        navigation.navigate('PassingSubject');
      },
      icon: require('../../../images/ImagePass.png'),
      count: Sizes.REAL_SIZE_72,
    },
    {
      id: 3,
      name: 'Môn chưa đậu',
      onPress: () => {
        navigation.navigate('FaildSubject');
      },
      icon: require('../../../images/ImageFaild.png'),
      count: Sizes.REAL_SIZE_80,
    },
    // {
    //   id: 4,
    //   name: 'Học phí',
    //   onPress: () => { navigation.navigate("TuitionFee") },
    //   icon: require('../../../images/ImagePriceStudent.png'),
    //   count: Sizes.REAL_SIZE_80,
    // },
    {
      id: 1,
      name: 'Thông tin sinh viên',
      onPress: () => {
        navigation.navigate('ProfileStudent');
      },
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
      <View style={styles.ViewTitle}>
        {/* <Image
          source={require('../../../images/ImageAvatar.png')}
          style={{
            height: Sizes.REAL_SIZE_40,
            width: Sizes.REAL_SIZE_40,
            borderRadius: Sizes.REAL_SIZE_8,
            borderWidth: 0.25,
          }}
        /> */}
        <FontAwesome
          name="user-circle-o"
          color={colors.WHITE}
          size={Sizes.REAL_SIZE_40}

        />
        <View style={styles.ViewTxtTitle}>
          <Text style={styles.TxtHello}>Xin chào!</Text>
          <Text style={styles.TxtNameUser}>
            {authReducer?.userInfo?.SV_HOTEN
              ? authReducer?.userInfo?.SV_HOTEN
              : 'Sinh Viên'}
          </Text>
        </View>
      </View>
      <View style={{flex:1}}>
        <TopTabNavigation />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatBot');
        }}
        style={{
          position:'absolute',
          height: 80,
          width: 80,
          borderRadius: 40,
          bottom: 100,
          left: WIDTH - 100,
        }}>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/281679/screenshots/14897126/media/f52c47307ac2daa0c727b1840c41d5ab.png',
          }}
          style={{ height: 80, width: 80, borderRadius: 40 }}
        />
      </TouchableOpacity>
      {/* <ImageBackground
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
            <Text style={styles.TxtNameUser}>
              {authReducer?.userInfo?.SV_HOTEN
                ? authReducer?.userInfo?.SV_HOTEN
                : 'Sinh Viên'}
            </Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatBot');
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            bottom: 100,
            left: WIDTH - 80,
          }}>
          <Image
            source={{
              uri: 'https://cdn.dribbble.com/users/281679/screenshots/14897126/media/f52c47307ac2daa0c727b1840c41d5ab.png',
            }}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
        </TouchableOpacity>
      </ImageBackground> */}
    </View>
  );
};

export default HomeScreenStudent;
