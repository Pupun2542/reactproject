import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    HeaderButtons,
    HeaderButton,
    Item,
  } from 'react-navigation-header-buttons';
  import { Ionicons } from '@expo/vector-icons';

const Register = ( {navigation} ) => {

    const IoniconsHeaderButton = props => (
        <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
      );
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item
                title="back"
                iconName="arrow-back-outline"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
        });
      }, [navigation]);

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})