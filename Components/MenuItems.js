import React, { Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

 

export default class Menu extends React.Component {
      render(){
          return(
              <View style={styles.menuItems}>
                  <Image 
                  source={this.props.itemImage}
                  style={styles.image}/>

              </View>
          );
      }
}

const styles = StyleSheet.create({

    menuItems:{
        width: '40%',
        height: '70%',
        padding: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth:  3
    }

});