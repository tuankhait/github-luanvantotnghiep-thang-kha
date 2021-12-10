/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View, Text} from 'react-native';
import HeaderBase from '../../../components/HeaderBase';
import colors from '../../../shared/themes/colors';
import RNRasa from './RNRasa';


// your host
const IpLaptop ="192.168.49.110";
const HOST = `http://${IpLaptop}:5005`;

//TODO: reset bot on destroy
//TODO: handle when bot response error

const ChatBoxScreen = ({navigation}) => {
    return (
        // <>
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,124,195,0.1)" }}>
            <HeaderBase backBtnEnable={true} textHeader="Chat Bot" handleNavigationGoBack={() => navigation.navigate("ProfileStudent")}/>
            <View style={{flex:1}}>
                <RNRasa
                    // emptyResponseMessage="Sorry, I dont understand"
                    host={HOST}
                    onSendMessFailed={(error) => console.log(error)}
                    placeholder="Nhập tin nhắn"
                    alwaysShowSend={true}
                // renderSend={()=>{return(<View style={{alignSelf:'center', marginHorizontal: 12}}><Text>Gửi</Text></View>)}}
                />
            </View>     
            </SafeAreaView>
        // </>
    );
};

export default ChatBoxScreen;