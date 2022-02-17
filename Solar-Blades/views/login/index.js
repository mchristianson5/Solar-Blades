import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainHeader from "../../components/mainHeader";

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <MainHeader />
        <StatusBar style="auto" />
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
});
