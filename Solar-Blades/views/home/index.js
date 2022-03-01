import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MainHeader from "../../components/mainHeader";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <MainHeader navigate={navigation} isHome={true} />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            style={styles.leftContainer}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("BladeManager")}
          >
            <Text style={styles.buttonText}>Manage Device</Text>
            <Image
              style={{ width: 90, height: 90, tintColor: "white" }}
              source={require("../../icons/SolarPanel.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText}>Settings</Text>
            <Icon
              style={{ marginTop: 15 }}
              name="gears"
              size={80}
              color="white"
              type="font-awesome"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.leftContainer}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("BladeManager")}
          >
            <Text style={styles.buttonText}>Weather</Text>
            <Icon
              style={{ marginTop: 15 }}
              name="cloud"
              size={80}
              color="white"
              type="font-awesome"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText}>Technical Support</Text>
            <Icon
              style={{ marginTop: 5 }}
              name="phone"
              size={80}
              color="white"
              type="font-awesome"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  buttonText: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  leftContainer: {
    width: 150,
    height: 150,
    marginHorizontal: 40,
    marginVertical: 30,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 193, 7, 1)",
  },
  rightContainer: {
    width: 150,
    height: 150,
    marginVertical: 30,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 193, 7, 1)",
  },
});
