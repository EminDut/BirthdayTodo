import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FAB, Portal, Provider} from 'react-native-paper';

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

const HomeScreen = () => {
  const route = useRoute();
  const {selectedImage, selectedDateText, inputValue,} = route.params || {};

  const iconSize = 30;
  const iconRightMargin = 15;
  const navigation = useNavigation();

  const DatePage = () => {
    navigation.navigate('DateScreen');
  };

  const AlarmIkon = () => {
    navigation.navigate('AlarmScreen');
  };

  const [state, setState] = useState(false);

  const onStateChange = ({open}) => setState({open});

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1,backgroundColor:"pink"}}>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons name="menu" size={30} color="#26201e" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#26201e',
              marginLeft: 25,
              fontWeight: 'bold',
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


          {/* İTEMLERİ BURAYA ALIYORUZ */}


      <View style={{...styles.reactView,height:200,width:"95%",marginTop:40,marginHorizontal:10,backgroundColor:"white"}}>
        {selectedDateText && (
          <Text style={{ fontSize:20,position:"absolute",left:200,top:20}}>{selectedDateText}</Text>
        )}
        {inputValue && (
          <Text style={{ fontSize: 20,position:"absolute",left:200,top:50}}>{inputValue}</Text>
        )}

          <View style = {{ ...styles.reactView,width:180,height:180,backgroundColor:"white",borderRadius:20,position: 'absolute',left:10,bottom:10}}>
            
           <TouchableOpacity>
                {selectedImage && (
                <Image style={{ ...styles.ofsetView,width:185,height:185,bottom:13}} source={selectedImage} />)}        
           </TouchableOpacity>
          </View>
      </View>

      
        <Provider>
          <Portal>
            <FAB.Group
              style={{
                position: 'absolute',
             
              }}
              open={state.open}
              onStateChange={onStateChange}
              icon={state.open ? 'chevron-triple-up' : 'plus'}
              actions={[
                {
                  icon: 'cake-variant',
                  label: 'Doğum Günü Ekle',
                  onPress: DatePage,
                },
                {icon: 'bell', label: 'Alarm Ekle', onPress: AlarmIkon},
              ]}
            />
          </Portal>
        </Provider>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  reactView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ofsetView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

  }
});

