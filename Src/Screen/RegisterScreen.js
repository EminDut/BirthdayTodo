import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <Text>RegisterScreen</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
    </SafeAreaView>
  );
}
