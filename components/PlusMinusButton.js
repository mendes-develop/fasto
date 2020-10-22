import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native-web";

export function ButtonPlus() {
    const styles = StyleSheet.create({
        buttonContainer: {
          height: 30,
          width: 30,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        //   borderWidth: 2,
          margin: 15,
          display: "flex"
        },
        buttonPlus: {
          backgroundColor: "rgb(255,77,0)",
          borderColor: "rgb(255,77,0)"
        },
        buttonMinus: {
          borderColor: "rgb(255,77,0)"
        },
        textPlus: {
          color: "white",
          fontWeight: "bold",
          fontSize: 20
        },
        textMinus: {
          color: "rgb(255,77,0)",
          fontWeight: "bold",
          fontSize: 20,
        }
      });
  return (
    <View style={[styles.buttonContainer, styles.buttonPlus]}>
      <Text style={styles.textPlus}> + </Text>
    </View>
  );
}

export function ButtonMinus(props) {
    const styles = StyleSheet.create({
        buttonContainer: {
          height: 30,
          width: 30,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          margin: 15,
          display: "flex"
        },
        buttonPlus: {
          backgroundColor: "rgb(255,77,0)",
          borderColor: "rgb(255,77,0)"
        },
        buttonMinus: {
          borderColor: "rgb(255,77,0)"
        },
        textPlus: {
          color: "white",
          fontWeight: "bold",
          fontSize: 20
        },
        textMinus: {
          color: "rgb(255,77,0)",
          fontWeight: "bold",
          fontSize: 20,
        }
      });
  return (
    <View style={[styles.buttonContainer, styles.buttonMinus]}>
      <Text style={styles.textMinus}>-</Text>
    </View>
  );
}

