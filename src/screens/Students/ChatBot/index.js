/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View, Text} from 'react-native';
import Header from '../../../components/Header';
import RNRasa from './RNRasa';


// your host
const IpLaptop ="192.168.1.12";
const HOST = `http://${IpLaptop}:5005`;

//TODO: reset bot on destroy
//TODO: handle when bot response error

const ChatBoxScreen = () => {
    return (
        // <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header backBtnEnable={true} textHeader="Chat bot" />
                <RNRasa
                    // emptyResponseMessage="Sorry, I dont understand"
                    host={HOST}
                    onSendMessFailed={(error) => console.log(error)}
                    placeholder="Nhập tin nhắn"
                alwaysShowSend={true}
                // renderSend={()=>{return(<View style={{alignSelf:'center', marginHorizontal: 12}}><Text>Gửi</Text></View>)}}
                />
            </SafeAreaView>
        // </>
    );
};

export default ChatBoxScreen;