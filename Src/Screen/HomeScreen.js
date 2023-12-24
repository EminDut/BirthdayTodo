import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const iconSize = 30;
const iconRightMargin = 15;

export const DrawerContent = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1,backgroundColor:"pink"}}>
        
          <ImageBackground
            source={require('../../assets/pasta2.png')}
            style={{width: '100%', height: 300}}
          />

        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:20}}>
            <MaterialCommunityIcons name="baby" size={30} color="#26201e" style={{marginLeft: 5}} />
           <Text style={{marginLeft: 12, color: '#26201e'}}>Uygulamayı Değerlendir</Text>  
         </View>

        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:20}}>
          <MaterialCommunityIcons name="share-variant" size={30} color="#26201e" style={{marginLeft: 5}} />
          <Text style={{marginLeft: 12, color: '#26201e'}}>Uygulamayı Paylaş</Text>  
        </View>

         <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:20}}>
            <MaterialCommunityIcons name="alpha-l-box" size={30} color="#26201e" style={{marginLeft: 5}} />
            <Text style={{marginLeft: 12, color: '#26201e'}}>Dil</Text>  
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:20}}>
            <MaterialCommunityIcons name="account-multiple" size={30} color="#26201e" style={{marginLeft: 5}} />
            <Text style={{marginLeft: 12, color: '#26201e'}}>Yardım</Text>  
         </View>

        <View style={{flex: 1, backgroundColor: 'tomato'}}>
          <Text>ASDASDSA</Text>
         </View>

      </View>
    </SafeAreaView>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#ffe4e1',
          flexDirection: 'row',
          width: '100%',
          height: '7%',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" size={30} color="#26201e" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: '#26201e',
            marginTop: 5,
            marginLeft: 20,
          }}>
          Doğum Günleri
        </Text>
      </View>

      <MaterialCommunityIcons
        name="bell"
        size={30}
        color="#26201e"
        style={{
          position: 'absolute',
          right: iconRightMargin,
          top: (40 - iconSize) / 2 + 5,
        }}
      />

      <View style={{flex: 1, backgroundColor: 'darksalmon'}}>
        <Text>asdasdsa</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>asdasdsa</Text>
      </View>
    </SafeAreaView>
  );
}
