import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = () => {
  return (
    <View>
      <Text>Box</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
    container: { flex:1,backgroundColor:"plun",padding:60},
    box:{
        width: '25%',
        height: '25%',
        padding: 10,

    },
    lightblueBg:{
        backgroundColor: "lightblue",
    }
})