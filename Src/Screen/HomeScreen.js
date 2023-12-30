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
import {useNavigation} from '@react-navigation/native';
import {FAB, Portal, Provider} from 'react-native-paper';
import {PhotoContex} from './PhotoContex';

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

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedPhoto } = useContext(PhotoContex);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params?.selectedPhoto) {
      const newPhoto = route.params.selectedPhoto;
      setData(prevData => [...prevData, newPhoto]);
    }
  }, [route.params?.selectedPhoto]);

  const DatePage = () => {
    navigation.navigate('DateScreen');
  };

  const AlarmIkon = () => {
    navigation.navigate('AlarmScreen');
  };

  const [state, setState] = useState(false);

  const onStateChange = ({ open }) => setState({ open });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{
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
              marginTop: 5,
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
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.reactModal}>
              <Image
                source={item}
                style={{ width: 300, height: 300, borderRadius: 5 }}
                resizeMode="cover"
              />
            </View>
          )}
        />
        <Provider>
          <Portal>
            <FAB.Group
              style={{
                position: 'absolute',
                right: 16,
                bottom: 16,
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
                { icon: 'bell', label: 'Alarm Ekle', onPress: AlarmIkon },
              ]}
            />
          </Portal>
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  reactModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
