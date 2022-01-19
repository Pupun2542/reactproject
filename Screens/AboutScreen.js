import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeScreen from './HomeScreen'

const AboutScreen = ({route, navigation}) => {
    const {email} = route.params;
    return (
        <View style = {styles.container}>
            <Text>เกี่ยวกับเรา</Text>
            <Text>{email}</Text>
            <Button 
                title='Go to Home'
                onPress={()=>navigation.push('HomeScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AboutScreen