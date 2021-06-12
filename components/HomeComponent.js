import React, { Component } from "react";
import { View, Text } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text style={(justifyContent = "center")}>
          Games Felas, Home Page of your the best Game Profile App ever
        </Text>
      </View>
    );
  }
}

export default Home;
