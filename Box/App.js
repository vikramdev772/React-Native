import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.box,styles.lightGreen]}>
      <Text >BOX 1</Text>
      </View>
      
      <View style={[styles.box2,styles.lightBlue]}>
      <Text >BOX 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 100,
    height: 100,
    padding:20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8

  },
  box2:{
    width: 100,
    height: 100,
    paddingHorizontal:30,
    paddingVertical:30,
    marginVertical: 20,
    
  },

  lightGreen:{
    backgroundColor: "lightgreen"
  },
  lightBlue:{
    backgroundColor: "lightblue"
  }
});
