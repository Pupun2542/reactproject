import { StyleSheet, Text, View, SafeAreaView, Image, Linking } from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import React from 'react';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
        {/* top large image */}
        <Image
            source={require('../assets/react_logo.png')}
            style={styles.sideMenuProfileIcon}
        />
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem
                label="Visit Us"
                onPress={()=>Linking.openURL('it.tni.ac.th')}
            />
        <View style={styles.customItem}>
            <Text onPress={()=>Linking.openURL('tni.ac.th')}>
                Rate Us
            </Text>
            <Image source={require('../assets/star_filled.png')} styles={styles.iconStyle}/>
        </View>
        </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    },
    iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    },
    customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    },
    });

export default CustomSidebarMenu;
