import React, {useContext} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {DateContext} from './DateContext ';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';



const photos = [
  require('../../assets/resim2.png'),
  require('../../assets/a2.png'),
  require('../../assets/a3.png'),
  require('../../assets/a4.png'),
  require('../../assets/a5.png'),
  require('../../assets/a6.png'),
  require('../../assets/a7.png'),
  require('../../assets/a9.png'),
  require('../../assets/a10.png'),
  require('../../assets/a11.png'),
  require('../../assets/a12.png'),
  require('../../assets/a13.png'),
  require('../../assets/a14.png'),
  require('../../assets/a15.png'),
  require('../../assets/a16.png'),
  require('../../assets/a17.png'),
  require('../../assets/a18.png'),
  require('../../assets/a19.png'),
  require('../../assets/a24.png'),
  require('../../assets/a26.png'),

  

];

const AssetsScreen = () => {

  const { setSelectedImage } = useContext(DateContext);
  const navigation = useNavigation();

  const handleImageSelection = (image) => {
    if (image === require('../../assets/resim2.png')) {
      launchImageLibrary({ mediaType: 'photo' }, (response) => {
        if (response.didCancel) {
        } else if (response.error) {
          Toast.show({
            type:"error",
            text1:"Hata",
            text2:"Galeri Açılırken Bir Sorunla Karşılaştı Lütfen Tekrar Deneyin"
          })
        } else if (response.assets && response.assets.length > 0) {
          const photoUri = response.assets[0].uri;
          if (photoUri) {
            setSelectedImage({ uri: photoUri });
            navigation.navigate('DateScreen');
          } else {
          }
        }
      });
    } else {

      setSelectedImage(image);
      navigation.navigate('DateScreen');
    }
  };
  
  

  

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleImageSelection(item) } 
      style={{flex: 1, aspectRatio: 1, marginHorizontal: 2, marginBottom: 5}}>
      <Image
        source={item}
        style={{aspectRatio: 1, width: '100%', height: '100%', borderRadius: 5}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 20, alignItems: 'center'}}>
          Fotograf Galerisi
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.navigate('DateScreen')}>
          <MaterialCommunityIcons
            name="arrow-left-thin"
            size={30}
            color="gray"
          />
        </TouchableOpacity>

      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          paddingHorizontal: 5,
          marginTop: 40,
        }}>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

export default AssetsScreen;
