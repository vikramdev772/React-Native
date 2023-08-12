import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';

export default function App() {
  return (
   <View style={styles.container}>
   <Box/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: "stretch",
    marginTop:64,
    borderColor: "red"
  },

});
