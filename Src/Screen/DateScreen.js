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
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { PhotoContex } from './PhotoContex';


export default function DateScreen() {

  const navigation = useNavigation();
  const { selectedPhoto } = useContext(PhotoContex);

  const handleSelectPhoto = {}
  

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

  const handleSaveDate = () => {
    if (selectedPhoto) {
      setOpen(true);}
      else{
      alert('Lütfen bir fotoğraf seçin.');}
    
    navigation.navigate('HomeScreen', { selectedPhoto });


  };

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
              height: 320,
              marginTop: 70,
              width: 320,
              padding: 4,
              borderRadius: 10,
            }}>
            <MaterialCommunityIcons
              color="darkblue"
              name="panorama-variant-outline"
              size={30}
              style={{position: 'absolute', top: 270, right: 20}}
            />

            <Image
              source = {selectedPhoto || {}}
              style={{width: '100%', height: '100%', borderRadius: 5}}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TextInput
            style={{
              ...styles.modalView,
              top: 25,
              borderRadius: 10,
              textAlign: 'auto',
            }}
            placeholder="Kimin doğum günü ? Ör. Ali"
            value={inputValue}
            onChangeText={text => setInputValue(text)}
          />

          <Button
          onPress={handleSaveDate}
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

          {open && (
            <View style={{...styles.modalView, marginTop: 50}}>
              <DatePicker
                mode="date"
                date={date}
                onConfirm={selectedDate => {
                  setDate(selectedDate);
                  handleSaveDate();
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
