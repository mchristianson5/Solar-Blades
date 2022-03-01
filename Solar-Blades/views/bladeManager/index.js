import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import MainHeader from "../../components/mainHeader";

const BladeManager = ({ navigation }) => {
  const [solarBladeOn, setSolarBladeOn] = useState(false);
  const [timer, setTimer] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <MainHeader navigate={navigation} />
        <StatusBar style="auto" />
        <View style={styles.switch}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>
            Turn on SolarBlade
          </Text>
          <Switch
            style={{ marginLeft: 10, right: 3 }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={solarBladeOn ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => setSolarBladeOn(!solarBladeOn)}
            value={solarBladeOn}
          />
        </View>
        {/* Weather, notifications on, stats on how often turns on. */}
        <View style={styles.switch}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Turn on timer</Text>
          <Switch
            style={{ marginLeft: 10, right: 3 }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={timer ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => setTimer(!timer)}
            value={timer}
          />
        </View>
      </View>
    </>
  );
};
export default BladeManager;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
