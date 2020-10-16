import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  CheckBox,
  TextInput,
} from "react-native-web";
import styled from "styled-components";
import { ButtonPlus, ButtonMinus } from "./PlusMinusButton";

export default function CellItemDetail({ item, navigation }) {
  // console.log(item)
  return (
    <React.Fragment>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Adds</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox value={false} style={styles.checkbox} />
          <Text style={styles.label}>Cheese Cheese</Text>
          <Text style={styles.labelPrice}>+$2,50</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={false} style={styles.checkbox} />
          <Text style={styles.label}>Bacon</Text>
          <Text style={styles.labelPrice}>+$2,50</Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Special Instructions</Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Dressing on the side? No pickles? Let us know..."
            underlineColorAndroid="transparent"
            style={styles.textInput}
            multiline={true}
            numberOfLines={1}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#F3F3F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    // flexDirection: "row",
    // borderRadius: 5
    // justifyContent: 'space-evenly'
  },
  buttonsContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 3,
  },
  imageContainer: {
    flex: 2,
    // borderWidth: 2
  },
  image: {
    right: 0,
    left: 0,
    top: 0,
    height: 100,
  },
  subtitleContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textInputView: {
    marginTop: 20,
    // padding: 8,
    minHeight: 70,
    maxHeight: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderColor: "#EEE",
    fontWeight: 700,
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    flex: 1
  },
  checkbox: {
    alignSelf: "center",
    // flex:1
  },
  label: {
    marginLeft: 8,
    // flex:1,
    // border: "1px solid red"
  },
  labelPrice:{
    position: "absolute",
    right: 50,
    // flex:1,
    // padding
    width: "100px",
    // height: "120px",
    // border: "3px solid blue",
  }
});
