import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native-web";

export default function AddToCartButton(){

  let total = '22.50'

  let loading = false

    return (
      <View  style={[styles.button, loading ? styles.disableButton  : styles.activeButton ]}>
        <Text style={[styles.signupText, styles.buttonText]}>{loading ? 'Adding to Cart...' : `Add to Cart - $${total}`}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginHorizontal: 20,
    marginVertical: 20
  },
  activeButton: {
    backgroundColor: "rgb(255,77,0)",
  },
  disableButton: {
    backgroundColor: "rgba(5, 219, 106, 0.6)"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    color: "#ecf0f1"
  },
    
})