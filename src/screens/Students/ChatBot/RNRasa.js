import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Platform, KeyboardAvoidingView, View} from 'react-native';
import {
    uuidv4,
    createNewBotMessage,
    createBotEmptyMessage,
    fetchOptions,
} from './util';

//TODO: reset bot on destroy

const RNRasa = ({
    host,
    onSendMessFailed,
    onEmptyResponse,
    emptyResponseMessage,
    userAvatar,
    botAvatar,
    ...giftedChatProp
}) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Xin chào!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: "https://cdn.dribbble.com/users/281679/screenshots/14897126/media/f52c47307ac2daa0c727b1840c41d5ab.png",
                },
            },
        ])
    }, [])
    // Parse the array message
    const parseMessages = useCallback(
        (messArr) => {
            return (messArr || []).map((singleMess) =>
                createNewBotMessage(singleMess, "https://cdn.dribbble.com/users/281679/screenshots/14897126/media/f52c47307ac2daa0c727b1840c41d5ab.png"),
            );
        },
        [botAvatar],
    );

    // Send message to bot
    const sendMessage = useCallback(
        async (text) => {
            const rasaMessageObj = {
                message: text,
                sender: 'user',
            };
            try {
                const response = await fetch(`${host}/webhooks/rest/webhook`, {
                    ...fetchOptions,
                    body: JSON.stringify (rasaMessageObj),
                });

                let messagesJson = await response.json();
                const messageFail = [{ "recipient_id": "user", "text": "Tôi không hiểu?" }];
if(messagesJson.length==0){
    messagesJson =messageFail;
}
                const newRecivieMess = parseMessages(messagesJson);
console.log(newRecivieMess);
                if (!newRecivieMess.length) {
                    onEmptyResponse && onEmptyResponse();
                    if (emptyResponseMessage) {
                        const emptyMessageReceive = createBotEmptyMessage(
                            emptyResponseMessage,
                        );
                        setMessages((previousMessages) =>
                            GiftedChat.append(previousMessages, [emptyMessageReceive]),
                        );
                    }
                    return;
                }
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, newRecivieMess.reverse()),
                );
            } catch (error) {
                // handle when send message failed
                onSendMessFailed(error);
            }
        },
        [
            parseMessages,
            host,
            onSendMessFailed,
            onEmptyResponse,
            emptyResponseMessage,
        ],
    );
    // Send message
    const onSend = useCallback(
        (mess) => {
         
            sendMessage(mess[0].text);
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, mess),
            );
            // console.log("mess[0].text", mess[0].text)
        },
        [],
    );
    // Bot Button click
    const onQuickReply = useCallback(
        (props) => {
            const value = props && props[0] && props[0].value;
            const quickMessage = [
                {
                    createdAt: new Date(),
                    username: 'user',
                    _id: uuidv4(),
                    user: { _id: 1, avatar: userAvatar },
                    text: value,
                },
            ];
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, quickMessage.reverse()),
            );
            sendMessage(value);
        },
        [userAvatar, sendMessage],
    );

    return (
        <View style={{ flex: 1 }}>
        <GiftedChat
            {...giftedChatProp}
            user={{
                _id: 1,
                avatar: userAvatar,
            }}
            onSend={(mess) => onSend(mess)}
            messages={messages}
            onQuickReply={onQuickReply}
        />
            {
                Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    );
};

export default RNRasa;