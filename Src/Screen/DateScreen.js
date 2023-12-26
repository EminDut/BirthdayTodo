import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-paper';

export default function DateScreen() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#FAFBFD', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          mode="contained"
          icon="calendar"
          onPress={() => setOpen(true)}
          style={{ position: 'absolute', top: 10, right: 10 }}>
         
          Kaydet </Button>
      
        {open && (
          <View style={styles.modalView}>
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
          <Text style={{ marginTop: 30, fontSize: 20 }}>
            Doğum Günü Tarihi: {selectedDateText}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 35,
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
