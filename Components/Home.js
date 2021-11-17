import React, { Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    
} from 'react-native';

import MenuItem  from './Components/MenuItems';

export default class App extends React.Component {
    render() {
        return(
            <ImageBackground 
            source ={require('./images/background.jpg')}
            style={styles.container}>

            <View style={styles.overlayContainer}>
                <View style={styles.top}>
                    <Text style={styles.header}>F R A M E U P</Text>

                </View>
                
                    <View style={styles.menuContainer}>
                        
                        <MenuItem itemImage={require('./images/apple 1.jpg')} />
                        <MenuItem itemImage={require('./images/android 2.jpg')} />
                        
                    
                    </View>
             </View>   

            </ImageBackground>
        );

    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer:{
        flex: 1,
        backgroundColor: 'rgba(47,163,218, 0.4)'
    },
    top:{
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header:{
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    menuContainer:{
        height: '50%',
        flexDirection: 'column',
        flexWrap: 'wrap',
    }
});