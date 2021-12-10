import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../shared/themes/colors';
const {height,width }= Dimensions.get('window')

const TabBarApp = ({state, descriptors, navigation}) => {
  const Srcoll = useRef();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.ctn}>
      <ScrollView  ref={Srcoll}
      horizontal showsHorizontalScrollIndicator={false}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          Srcoll.current.scrollTo({ x:index*150, y: 0, animated: true })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const tabBarBadge = () => {
          const iconBadge = (
            <View />
          );
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabItem}>
            <View
              style={[
                styles.viewTab,
                {
                  backgroundColor: !isFocused
                    ? colors.BLUE_MAIN
                    : 'white',
                },
              ]}>
              <Ionicons
                name={options.tabBarIcon}
                size={22}
                color={isFocused ? '#4695FE' : 'white'}
                style={{
                  padding:2,
                }}
              />

              <Text
                style={{
                  color: isFocused ? '#4695FE' : 'white',
                  fontSize: 16,
                  marginHorizontal: 6,
                }}>
                {label}
              </Text>
            </View>
            {tabBarBadge()}
          </TouchableOpacity>
        );
      })}
     </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    height:60,
    justifyContent: "space-around",
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical:4,
    backgroundColor:"white",
    width: width,
    shadowColor: "#000",
    backgroundColor:colors.BLUE_MAIN,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#EE161F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  viewTab: {
    flexDirection: 'row',
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
export default TabBarApp;
