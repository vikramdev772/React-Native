import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = () => {
  return (
    <View>
      <View style={[styles.box]}>
        <Text>hello</Text>
      </View>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: "red",
        borderWidth:6,
        color:"white",
        fontWeight:900,
        


    },

})