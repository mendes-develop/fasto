import React, { useState } from "react";
import {colors} from "../utils/colors"
import { Text, View, StyleSheet, Image, TextInput, CheckBox } from "react-native-web";

const white = "#ffffff";
const blue = "rgb(14, 122, 254)";

const SplitCell = ({ amount, name, imageUrl, addUserSelected, section, tab }) => {
  
  
  const [selected, setSelected] = useState(false);
  const [textInput, setTextInput] = useState("")
  
  const formattedAmount = () => `$${(amount / 100).toFixed(2)}`;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.subContainer3}>
          <CheckBox
            disabled={tab === "order"}
            onChange={() => setSelected(!selected)}
            name={name}
            value={tab === "order" || selected}
            style={styles.checkbox}
            color={colors.blue}
          />
        </View>
        <View style={styles.subContainer1}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.subContainer2}>
          <TextInput
            placeholder="$200.99"
            keyboardType="numeric"
            editable={tab === "custom"}
            placeholderTextColor={"#2F4F4F"}
            style={[styles.textInput, tab === "custom" && styles.enabled]}
            value={tab === "custom" && amount ? formattedAmount() : ""}
            onChange={()=> console.log("hello")}
          />
        </View>
      </View>
      <View style={styles.line}></View>
      
    </React.Fragment>
  );
};

SplitCell.defaultProps = {
  imageUrl: "./avatar.png",
  name: "Tautology125",
  // amount: 20050,
  selected: true,
};

export default SplitCell;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: colors.ghostWhite,
    // padding: 8,
    display: "flex",
    // border: "1px solid red",
    // marginBottom: "10px",
    paddingBottom: "10px",
    paddingTop: "20px",
    // borderBottomWidth: 1,
    // borderColor: "black",
  },
  subContainer1: {
    justifyContent: "center",
    // border: '1px solid purple',
    // padding: 8
    // width: "35%",
  },
  image: {
    // border: '1px solid red',
    height: "50px",
    width: "50px",
    margin: "auto",
    // margin: "auto",
  },
  name: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    // border: '1px solid red',
    // padding: 8
  },
  subContainer2: {
    // border: "1px solid blue",
    width: "50%",
    // flex: 2,
    // display: flex;
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textInput: {
    // border: "1px solid white",
    backgroundColor: "#dddddd",
    width: "70%",
    borderRadius: "5px",
    paddingTop: "5px",
    fontWeight: "400",
    fontSize: 25,
    textAlign: "center"
    // paddingRight: 15,
    // flex: 1,
    // height: 40,
    // padding: 10,
  },
  enabled: {backgroundColor: colors.white},
  subContainer3: {
    // border: "1px solid blue",
    width: "15%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  black: { color: "darkGray" },
  checkbox: {
    height: 20,
    width: 20,
    margin: "auto",
  },
  line: {
    width: "90%",
    margin: "auto",
    borderBottomWidth: 1,
    borderColor: colors.darkBlue,
  },
});
