import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={[styles.box,styles.lightGreen]}>
      <Text >BOX 1</Text>
      </View>
      
      <View style={[styles.box,styles.lightBlue]}>
      <Text >BOX 1</Text>
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
    padding:10,
  },
  lightGreen:{
    backgroundColor: "lightgreen"
  },
  lightBlue:{
    backgroundColor: "lightBlue"
  }
});
