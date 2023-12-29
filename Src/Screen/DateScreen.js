import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform,Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default function DateScreen() {
  
  const navigation = useNavigation();

  const route = useRoute();

  const { selectedImage } = route.params || { selectedImage: null };

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
  setOpen(false);
};


  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : null}
  style={{flex: 1}}
>
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
          <TouchableOpacity  style={{backgroundColor:"#FAFBFD"}}onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons color="darkblue" name="close" size={30} />
          </TouchableOpacity>
        </View >

      <TouchableOpacity onPress={()=> navigation.navigate("AssetsScreen")}

      style={{...styles.modalView,height: 320, marginTop: 30,width:320,padding:4,borderRadius: 10}}>
          <MaterialCommunityIcons
            color="darkblue"
            name="panorama-variant-outline"
            size={30}
            style={{position: 'absolute', top: 250, right: 20}}/>
           {selectedImage && (
  <Image source={selectedImage} style={{ width: '100%', height: '100%', borderRadius: 5 }} resizeMode="cover" />
)} 

      </TouchableOpacity>


        <TextInput
          style={{...styles.modalView, top: 25, borderRadius: 10,textAlign:"auto"}}
          placeholder="Kimin doğum günü ? Ör. Ali"
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />

        <Button
          mode="contained"
          icon="calendar"
          onPress={() => setOpen(true)}
          style={{
            position: 'absolute',top: 20,right: 15,width: '30%', height: '5%',}}
            >
          Kaydet
        </Button>

        {open && (
          <View style={{...styles.modalView, marginTop: 50}}>
            <DatePicker
              mode="date"
              date={date}
              onConfirm={selectedDate => {setDate(selectedDate); handleSaveDate();}}
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
