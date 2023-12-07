import React from 'react';
import {Text, Pressable} from 'native-base';

export default function Login({navigation}) {
  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate('Home', {
            date: +new Date(),
          });
        }}>
        <Text>登录</Text>
      </Pressable>
    </>
  );
}
