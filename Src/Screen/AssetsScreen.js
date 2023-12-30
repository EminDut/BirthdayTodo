import React, { useContext } from 'react';
import {View, FlatList, TouchableOpacity, Image,SafeAreaView,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { PhotoContex } from './PhotoContex';







const resim = require("../../assets/resim2.png")
const image1 = require('../../assets/a1.png');
const image2 = require('../../assets/a2.png');
const image3 = require('../../assets/a3.png');
const image4 = require('../../assets/a4.png');
const image5 = require('../../assets/a5.png');
const image6 = require('../../assets/a6.png');
const image7 = require('../../assets/a7.png');
const image8 = require('../../assets/a8.png');
const image9 = require('../../assets/a9.png');
const image10 = require('../../assets/a10.png');
const image11 = require('../../assets/a11.png');
const image12 = require('../../assets/a12.png');
const image13 = require('../../assets/a13.png');
const image14 = require('../../assets/a14.png');
const image15 = require('../../assets/a15.png');
const image16 = require('../../assets/a16.png');
const image17 = require('../../assets/a17.png');
const image18 = require('../../assets/a18.png');
const image19 = require('../../assets/a19.png');
const image20 = require('../../assets/a20.png');
const image21 = require('../../assets/a21.png');
const image22 = require('../../assets/a22.png');
const image23 = require('../../assets/a23.png');
const image24 = require('../../assets/a24.png');
const image25 = require('../../assets/a25.png');
const image26 = require('../../assets/a26.png');
const image29 = require('../../assets/a29.png');
const image31 = require('../../assets/a31.png');
const image34 = require('../../assets/a34.png');
const image35 = require('../../assets/a35.png');
const image36 = require('../../assets/a36.png');
const image37 = require('../../assets/a37.png');


const data = [
  {id: '1', source: resim},
  {id: '2', source: image2},
  {id: '3', source: image3},
  {id: '4', source: image4},
  {id: '5', source: image5},
  {id: '6', source: image6},
  {id: '7', source: image7},
  {id: '8', source: image8},
  {id: '9', source: image9},
  {id: '10', source: image10},
  {id: '11', source: image11},
  {id: '12', source: image12},
  {id: '13', source: image13},
  {id: '14', source: image14},
  {id: '15', source: image15},
  {id: '16', source: image16},
  {id: '17', source: image17},
  {id: "18", source: image18},
  {id: '19', source: image19},
  {id: '20', source: image20},
  {id: '21', source: image21},
  {id: '22', source: image22},
  {id: '23', source: image23},
  {id: '24', source: image24},
  {id: '25', source: image25},
  {id: '26', source: image26},
  {id: '29', source: image29},
  {id: '31', source: image31},
  {id: '34', source: image34}, 
  {id: '35', source: image35},
  {id: '36', source: image36},
  {id: '37', source: image37},

];





  const AssetsScreen = () => {

  const navigation = useNavigation();
  const {setSelectedPhoto } = useContext(PhotoContex);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    navigation.navigate("DateScreen");
  }
  
    
  


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {handlePhotoSelect(item.source)}} style={{ flex: 1, aspectRatio: 1, marginHorizontal: 2, marginBottom: 5 }}>
        <Image source={item.source} style={{aspectRatio: 1,  width: "100%", height: "100%", borderRadius: 5 }} resizeMode="cover" />
    </TouchableOpacity>
  );




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>

    <View style={{flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
     }}>
    
         <Text style={{fontSize:20,alignItems:"center"}}>Fotograf Galerisi</Text> 
      <TouchableOpacity style={{position: 'absolute',left: 20, }} onPress={()=>navigation.navigate("DateScreen")}>
            <MaterialCommunityIcons
        name="arrow-left-thin"
        size={30}
        color="gray" />
      </TouchableOpacity>
    </View>
      
      <View style={{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: 5 ,marginTop:40 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};


export default AssetsScreen;
