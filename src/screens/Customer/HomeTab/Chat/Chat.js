import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CustomHeader, ChatBox, ChatInput} from '../../../../components';
import CallIcon from 'react-native-vector-icons/MaterialIcons';
import {appIcons, colors, profile_uri, WP} from '../../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Chat = ({navigation}) => {
  return (
    <>
      <CustomHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        onPressCall={() => {
          navigation?.navigate('CallNow');
        }}
        height={WP('35')}
        img={{uri: profile_uri}}
        rightIcon={<CallIcon size={22} name={'call'} color={colors.p1} />}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? null : 'padding'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.listStyle}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <ChatBox
                    receiver={true}
                    messages={'Pellentesque in ipsum id orci porta dapibus.'}
                  />
                )}
                keyExtractor={() => Math.random()}
              />
            </View>
            <ChatInput
              rightIcon={() => (
                <Image source={appIcons.send} style={styles.imgStyle} />
              )}
              placeholder={'Type Something'}
              placeholderTextColor={colors.g4}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Chat;
