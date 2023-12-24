import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AlarmScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <TouchableOpacity onPress={handleGoBack}>
          <Text>sadsadsadasdsadsadasdsa</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, backgroundColor: 'tomato'}}></View>
    </SafeAreaView>
  );
}
