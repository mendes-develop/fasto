import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SplitCell from "../../components/SplitCell";
import {
  SectionList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native-web";

const ToggleButton = (props) => {
  console.log("props", props);
  const { setTab } = props;

  const styles = StyleSheet.create({
    buttonContainer: {
      position: "fixed",
      justifyContent: "center",
      width: "100%",
      padding: 20,
      top: 47,
      flexDirection: "row",
      textAlign: "center",
      border: `1px solid red`,
      alignItems: "stretch",
      // height: "200px",
      // justifyContent: "flex-end",
      // display: "flex",
      // flex: 1,
    },
    button: {
      // height: 50,
      // width: 50,
      flex: 1,
      // width: "100%",
      //   margin: 10,
      border: "1px solid blue",
      color: "blue",
      backgroundColor: "pink",
      paddingTop: 5,
      paddingBottom: 5,
    },
    blue: { color: "blue" },
    white: { color: "white" },
  });

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={(e) => setTab("equal")} style={styles.button}>
        <Text style={styles.tabText}>Equally</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(e) => setTab("order")} style={styles.button} style={styles.button}>
        <Text style={styles.tabText}>Per order</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(e) => setTab("custom")} style={styles.button} style={styles.button}>
        <Text style={styles.tabText}>Custom</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
