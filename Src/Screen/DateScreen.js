import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DateContext} from './DateContext ';
import Toast from 'react-native-toast-message';


export default function DateScreen() {
  //contex in başlangıcı state leri ekledik...
  const {selectedImage, setSelectedImage,setBirthdayList } = useContext(DateContext);

  console.log('Selected Image:', selectedImage);

  const navigation = useNavigation();

  //create contex kullandık....

  const selectImage = image => {
    setSelectedImage(image);
  };


  
  const handleSave = () => {
    if (!inputValue) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'Lütfen doğum günü için bir ad girin!',
        visibilityTime:1500
      });
      return;
    }
    if (!selectedDateText) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'Lütfen doğum günü tarihini seçin!',
        visibilityTime:1500
      });
      return;
    }
    if (!selectedImage) {
      Toast.show({
        type: 'error',
        text1: 'Hata',
        text2: 'Lütfen bir resim seçin!',
        visibilityTime:1500

      });
      return;
    }
    const newBirthday = {
      id: Date.now().toString(),
      name: inputValue,
      date: selectedDateText,
      image: selectedImage,
    };

    setBirthdayList(prevList => [...prevList, newBirthday]);
    
    navigation.navigate('HomeScreen', {
      selectedImage,
      selectedDateText,
      inputValue,
    });
  };

  


  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      setOpen(true);
      isFirstRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (date) {
      setSelectedDateText(date.toLocaleDateString('tr-TR'));
    }
  }, [date]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FAFBFD',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={{backgroundColor: '#FAFBFD'}}
              onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons color="darkblue" name="close" size={30} />
            </TouchableOpacity>
          </View>

      <TouchableOpacity
            onPress={() => navigation.navigate('AssetsScreen')}
            style={{
              ...styles.modalView,
              height: 310,
              width:310,
              marginTop: 60,
              marginVertical:24,
              padding: 5,
              borderRadius: 15,
            }}>
            <MaterialCommunityIcons
              color="darkblue"
              name="panorama-variant-outline"
              size={30}
              style={{position: 'absolute', top: 270, right: 20}}
            />

            {selectedImage && (
              <Image
                style={{width: 300, height: 300, resizeMode: 'cover',borderRadius:10}}
                source={selectedImage}
              />
            )}

      </TouchableOpacity>   
          <TextInput
            style={{
              ...styles.modalView,
              top: 20,
              borderRadius: 10,
              textAlign: 'auto',
            }}
            placeholder="Kimin doğum günü ? Ör. Ali"
            value={inputValue}
            onChangeText={text => {
              if (text.length >= 15){
                Toast.show({
                  type:"info",
                  text1:"uyarı",
                  text2:"İsim 15 karakterden fazla olmamalıdır :(",
                  visibilityTime:1500
                });
                return;
              }
              setInputValue(text)

            }}/>

          <Button
            onPress={handleSave}
            mode="contained"
            icon="calendar"
            style={{
              position: 'absolute',
              top: 20,
              right: 15,
              width: '30%',
              height: '5%',
            }}>
            Kaydet
          </Button>
          <Toast/>

          {open && (
            <View style={{...styles.modalView, marginTop: 50}}>
              <DatePicker
                mode="date"
                date={date}
                onConfirm={selectedDate => {
                  setDate(selectedDate);
                  selectImage();
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                onDateChange={newDate => {
                  setSelectedDateText(newDate.toLocaleDateString('tr-TR'));
                }}
              />
            </View>
          )}
          {selectedDateText && (
            <Text style={{marginTop: 30, fontSize: 20}}>
              Doğum Günü Tarihi: {selectedDateText}
            </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalView: {
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
});
