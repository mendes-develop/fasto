import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native-web";
import styled from "styled-components";
import { useRouter } from "next/router";
import { colors } from "../utils/colors";
// import { useNavigation } from '@react-navigation/native';

const RoundButton = styled.button`
  background-color: white;
  height: 40px;
  width: 40px;
  border-color: ${colors.darkBlue};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  // borderWidth: 2
  /* shadowOffset: {
      width: 0,
      height: 4,
    }, */
  margin: 20px;
  position: absolute;
  font-weight: bold;
  -webkit-box-shadow: 0 8px 6px -6px #777;
  -moz-box-shadow: 0 8px 6px -6px #777;
  box-shadow: 0 8px 6px -6px #777;
`;

export default function DismissButton() {
  // const navigation = useNavigation();
  const router = useRouter();

  return (
    <RoundButton onClick={() => router.back()} style={styles.textPlus}>
      X
    </RoundButton>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginLeft: 20,
    marginTop: 20,
    elevation: 8,
    position: "absolute",
  },
  textPlus: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
