import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuScreen = () => {
  return (
    <View>
      <Text style={styles.style}>MenuScreen</Text>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    style:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        padding:20
    }
})