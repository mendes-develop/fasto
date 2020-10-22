import Link from "next/link";
import styled from "styled-components";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native-web";

const Image = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  height: 30px;
  width: 30px;
`;

const Navbar = () => {
  const styles = StyleSheet.create({
    navContainer: {
      backgroundColor: "white",
      borderBottomColor: "pink",
      borderBottomWidth: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 8,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      zIndex: 9,
    },
    view: { height: 30, width: 30, zIndex: 9999 },
    section: {
      justifyContent: "center",
      textAlign: "center",
    },
    pageTitle: {
      fontSize: 25,
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.navContainer}>
      <View style={styles.section}>
        <Image url={"./avatar.png"} />
      </View>
      <View style={styles.section}>
        <Text style={styles.pageTitle}>Menu</Text>
      </View>
      <Image url={"./wine-list.png"}></Image>
    </View>
  );
};

export default Navbar;
