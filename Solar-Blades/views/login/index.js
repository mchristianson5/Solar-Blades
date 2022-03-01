import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainHeader from "../../components/mainHeader";
import { Input, Button } from "react-native-elements";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <MainHeader navigate={navigation} isHome={true} />
        <StatusBar style="auto" />
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.inputUser}
            placeholder="Username"
          ></Input>
          <Input
            containerStyle={styles.inputPassword}
            placeholder="Password"
          ></Input>
          <Button
            title={"Login!"}
            containerStyle={styles.buttonContainer}
            buttonStyle={{ backgroundColor: "rgba(255, 193, 7, 1)" }}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("Home", { name: "Jane" })}
          ></Button>
        </View>
      </View>
    </>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
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
