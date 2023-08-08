import {View,Text,StyleSheet} from "react-native";


export default function Box(){
    return (
        <View style={styles.box}>
        <Text style={StyleSheet.text}>Box</Text>
        </View>
    );
}




const styles = StyleSheet.create({
    box:{
        backgroundColor: "lightgreen",
        padding: 40,
        width:100,
        height:100,
        border: 2,
        borderColor:"black",
        borderWidth: 2,
        
       
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },

});


