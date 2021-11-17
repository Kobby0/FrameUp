import React, { Component } from "react";
import { View, ImageBackground,Image } from "react-native";

var bg=require('./images/background.jpg');
var Logo=require('./images/Logo.png');

export default class Splash extends Component {
  
  render() {
    return (
      <ImageBackground
      source= {bg}
      style= {{height:'100%', width: '100%'}}>
       <View
       style= {{flex:1, justifyContent:'center', alignItems: 'center',}}>
         <Image source={Logo} style= {{height: 150, width: 200}}></Image>

       </View>

      </ImageBackground>
    );
  }
}


