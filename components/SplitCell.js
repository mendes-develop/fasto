import * as React from "react";
import { Text, View, StyleSheet, Image, TextInput, CheckBox } from "react-native-web";

const SplitCell = (props) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Image
            style={styles.image}
            source={{
              uri: "./avatar.png",
            }}
          />
          <Text style={styles.name}>Tautology125</Text>
        </View>
        <View style={styles.subContainer2}>
          <TextInput style={styles.textInput} placeholder="$200,00" />
        </View>
        <View style={styles.subContainer3}>
          <CheckBox value={true} style={styles.checkbox} />
        </View>
      </View>
      <View style={styles.line}></View>
    </React.Fragment>
  );
};

SplitCell.defaultProps = {};

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
    margin: "auto"
    // margin: "auto",
  },
  subContainer2: {
    // border: "1px solid blue",
    width: "50%",
    // flex: 2,
    // display: flex;
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer3: {
    // border: "1px solid blue",
    width: "15%",
  },
  name: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    // border: '1px solid red',
    // padding: 8
  },
  textInput: {
    // border: "1px solid red",
    backgroundColor: "#e5e8e7",
    width: "80%",
    textAlign: "right",
    borderRadius: "5px",
    paddingTop: "5px",
    fontWeight: "400",
    fontSize: 25,
    color: "black",
    fontColor: "black"
    // flex: 1,
    // height: 40,
    // padding: 10,
  },
  checkbox: {
    height: 30,
    width: 30,
    margin: "auto",
  },
  line: {
      width :"90%",
      margin: "auto",
      borderBottomWidth: 1,
      borderColor: "#808080"
  }
});
