import {View, Text, ImageBackground,} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { FAB, Portal, Provider } from 'react-native-paper';



const iconSize = 30;
const iconRightMargin = 15;

export const DrawerContent = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#ffe4e1'}}>
        <ImageBackground
          source={require('../../assets/pasta2.png')}
          style={{width: '100%', height: 300}}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {}}>
            <MaterialCommunityIcons
              name="baby"
              size={30}
              color="#26201e"
              style={{marginLeft: 5}}
            />
            <Text style={{marginLeft: 12, color: '#26201e'}}>
              Uygulamayı Değerlendir
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {}}>
            <MaterialCommunityIcons
              name="share-variant"
              size={30}
              color="#26201e"
              style={{marginLeft: 5}}
            />
            <Text style={{marginLeft: 12, color: '#26201e'}}>
              Uygulamayı Paylaş
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {}}>
            <MaterialCommunityIcons
              name="alpha-l-box"
              size={30}
              color="#26201e"
              style={{marginLeft: 5}}
            />
            <Text style={{marginLeft: 12, color: '#26201e'}}> Dil </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {}}>
            <MaterialCommunityIcons
              name="account-multiple"
              size={30}
              color="#26201e"
              style={{marginLeft: 5}}
            />
            <Text style={{marginLeft: 12, color: '#26201e'}}> Yardım </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, backgroundColor: '#ffe4e1'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {}}>
            <Text style={{marginLeft: 12}}>bana tıklama</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};




export default function HomeScreen() {
  
  const navigation = useNavigation();

  const DatePage = () => {
    navigation.navigate("DateScreen")
  }



  const [state, setState] = useState(false);
  const onStateChange = ({ open }) => setState({ open });


  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'transparent',
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
        onPress={() => navigation.navigate('AlarmScreen')}
      />

<SafeAreaView style={{flex:1}}>
      <Provider>
        <Portal>
          <FAB.Group
            style={{
              position: 'absolute',
              backgroundColor: 'transparent', 
            }}
            open={state.open}
            onStateChange={onStateChange}
            icon={state.open ? 'chevron-triple-up' : 'plus'}
            actions={[
              
              { icon: 'cake-variant', label: 'Doğum Günü Ekle',onPress:DatePage },     
              { icon: 'bell', label: 'Alarm Ekle' },       
            ]}
              
          />
        </Portal>
      </Provider>
      </SafeAreaView>
    </SafeAreaView>
  );
}
