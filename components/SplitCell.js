import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, CheckBox } from "react-native-web";

const SplitCell = ({ amount, name, imageUrl, addUserSelected, section, tab }) => {
  const formattedAmount = () => `$${(amount / 100).toFixed(2)}`;

  const [selected, setSelected] = useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.subContainer2}>
          <TextInput
            keyboardType="numeric"
            style={[styles.textInput, tab === "custom" && styles.black]}
            editable={tab === "custom"}
            placeholder="$200.50"
            value={amount && formattedAmount()}
          />
        </View>
        <View style={styles.subContainer3}>
          <CheckBox
            disabled={tab === "order"}
            onChange={() => setSelected(!selected)}
            name={name}
            value={tab === "order" || selected}
            style={styles.checkbox}
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
  amount: 20050,
  selected: true,
};

export default SplitCell;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#ecf0f1",
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
    border: "1px solid gray",
    backgroundColor: "#e5e8e7",
    width: "80%",
    textAlign: "right",
    borderRadius: "5px",
    paddingTop: "5px",
    fontWeight: "400",
    fontSize: 25,
    color: "gray",
    // paddingRight: 10,
    // textAlign: "center"
    // flex: 1,
    // height: 40,
    // padding: 10,
  },
  subContainer3: {
    // border: "1px solid blue",
    width: "15%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  black: { color: "black" },
  checkbox: {
    height: 30,
    width: 30,
    margin: "auto",
  },
  line: {
    width: "90%",
    margin: "auto",
    borderBottomWidth: 1,
    borderColor: "#808080",
  },
});
