import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AlarmScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink',justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize:30}}>COMİNG-SOON</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
