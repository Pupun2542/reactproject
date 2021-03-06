import { View, Text, Image } from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style = {{flex:1, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Image 
      style = {{height:30,width:30}}
      source={require('../assets/react_logo.png')}/>
    </View>
  );
};

export default Logo;
