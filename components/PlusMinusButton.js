import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native-web";
import styled from "styled-components";
import { colors } from "../utils/colors";

const RoundButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 15px;
  display: flex;
  background-color: ${({ minus }) => (minus ? colors.ghostWhite : colors.darkBlue)};
  color: ${({ minus }) => (!minus ? colors.ghostWhite : colors.darkBlue)};
  border-color: ${colors.darkBlue};
  /* font-size: 18px; */
  font-weight: bold;
`;

export function ButtonPlus() {
  return <RoundButton>+</RoundButton>;
}

export function ButtonMinus() {
  return <RoundButton minus>-</RoundButton>;
}
