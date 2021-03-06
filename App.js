import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import bgImage from "./images/background.jpg";
import Logo from "./images/Logo.png";
import Icon from "react-native-vector-icons/Ionicons";


const { width: WIDTH } = Dimensions.get("window");

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true})
    } else {
      this.setState({ showPass: true, press: false})
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.LogoContainer}>
          <Image source={Logo} style={styles.Logo} />
          <Text style={styles.LogoText}>FrameUp</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person-outline"}
            size={28}
            color={"rgba(255, 255, 255, 0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon
              name={"ios-lock-outline"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}
          >
            <Icon
              name={
                this.state.press == false
                  ? "ios-eye-outline"
                  : "ios-eye-off-outline"
              }
              size={26}
              color={"rgba(255, 255, 255, 0.7)"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  Logo: {
    width: 300,
    height: 350,
  },
  LogoText: {
    color: "Navy",
    fontSize: 80,
    fontWeight: "500",
    marginTop: 50,
    opacity: 0.5,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingleft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});

