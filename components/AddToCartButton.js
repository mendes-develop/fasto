import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native-web";
import styled from "styled-components";
import { colors } from "../utils/colors";

export const Button = styled.button`
  display: block;
  background-color: ${colors.darkBlue}; /* disabled rgba(5, 219, 106, 0.6)"*/
  height: 55px;
  border-radius: 10px;
  justify-content: center;
  padding: 10px 50px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.ghostWhite};
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  border: 0;
`;

export default function AddToCartButton() {
  let total = "22.50";
  let loading = false;

  return <Button>{loading ? "Adding to Cart..." : `Add to Cart - $${total}`}</Button>;
}
