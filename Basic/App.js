import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/programmer.png'));

  const selectImage = () => {
    
    setBackgroundImage(require('./assets/layers.png'));

  };

  const changeImage=()=>{
    setBackgroundImage(require('./assets/programmer.png'));
  }

  return (   
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"black" }}>
      <Image
        source={backgroundImage}
        style={{ width: 370, height: 370, position: 'absolute' }}
      />
      <TouchableOpacity onPress={selectImage} style={{ padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5,marginTop:300 }}>
        <Text>Change Background</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeImage} style={{ padding: 10, backgroundColor: 'skyblue', borderRadius: 5,marginTop:100 }}>
        <Text>Change Background</Text>
      </TouchableOpacity>
    </View>
  )
}
  


export default App;
