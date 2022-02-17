import { StyleSheet, Text, View, Image } from "react-native";
import { Header, Input, Button, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MainHeader = () => {
  return (
    <>
      <Header
        style={styles.header}
        centerComponent={
          <Text style={{ color: "#fff", fontSize: 40 }}>Solar Blades</Text>
        }
        rightComponent={
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../../icons/sun.png")}
          />
        }
      />
      <View style={styles.inputContainer}>
        <Input containerStyle={styles.inputUser} placeholder="Username"></Input>
        <Input
          containerStyle={styles.inputPassword}
          placeholder="Password"
        ></Input>
        <Button
          title={"Login!"}
          containerStyle={styles.buttonContainer}
          buttonStyle={{ backgroundColor: "rgba(255, 193, 7, 1)" }}
          titleStyle={styles.buttonText}
        ></Button>
      </View>
    </>
  );
};
export default MainHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0000ff",
  },
  inputUser: {
    marginTop: 50,
    width: 200,
    textAlign: "center",
  },
  inputPassword: {
    marginTop: 10,
    width: 200,
    textAlign: "center",
  },
  inputContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    width: 150,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonText: { backgroundColor: "rgba(255, 193, 7, 1)" },
});
