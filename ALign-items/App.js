import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
    <Box style={{backgroundColor: "plum"}}>Box 1</Box>
   <Box style={{backgroundColor: "greenyellow"}}>Box 2</Box>
   <Box style={{backgroundColor: "lightblue"}}>Box 3</Box>
  
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
    borderWidth: 6,
    borderColor: "red"
  },
});
