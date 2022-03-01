import { StyleSheet, Text, View, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
const MainHeader = ({ navigate, isHome }) => {
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
        leftComponent={
          <>
            {!isHome && (
              <Icon
                style={{ marginTop: 15 }}
                name="arrow-left"
                size={30}
                color="white"
                type="font-awesome"
                onPress={() => navigate.goBack()}
              />
            )}
          </>
        }
      />
    </>
  );
};
export default MainHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0000ff",
  },
});
