import { Fragment } from "react";
import { loadDishes, setDish } from "../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView } from "react-native-web";
import DismissButton from "../components/DismissButton";
import AddToCartButton from "../components/AddToCartButton";
import { ButtonPlus, ButtonMinus } from "../components/PlusMinusButton";
import CellDishID from "../components/CellIDishID";
// import * as reactNative from 'react-native';

// console.log("hello");

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  border: 1px solid red;
`;
const footerFlatList = () => <View style={styles.bottomText} />;

const headerFlatList = () => (
  <React.Fragment>
    <Image
      style={styles.image}
      source={{
        uri: "./download.jpg",
      }}
    />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Title</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Eserunt mollit anim id est laborum.
      </Text>
    </View>

    <View style={styles.addDishContainer}>
      <TouchableOpacity onPress={() => setItemQuantity((itemQuantity += 1))}>
        <ButtonPlus />
      </TouchableOpacity>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text>1</Text>
      </View>

      <TouchableOpacity onPress={() => settingMinus()}>
        <ButtonMinus ronaldo/>
      </TouchableOpacity>
    </View>
  </React.Fragment>
);


const About = (props) => {
  const { selected_dish, ...rest } = useSelector((state) => state.main);

  let fakeArray = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <Container style={styles.container}>
      <View style={styles.dismissContainer}>
        <DismissButton />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={fakeArray}
          renderItem={({ item, index }) => <CellDishID />}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={headerFlatList()}
          ListFooterComponent={footerFlatList()}
        />
      </SafeAreaView>
      <TouchableOpacity style={styles.addButtonContainer} onPress={() => addingToCart(item)} disabled={true}>
        <AddToCartButton />
      </TouchableOpacity>
    </Container>
  );
};

export default About;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    // border: "1px solid red",
  },
  bottomText: {
    height: 60,
  },
  image: { height: "calc(100vh / 3)", width: "100%" },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  dismissContainer: {
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 52, 52, 0)",
    zIndex: 99,
  },
  addDishContainer: {
    flexDirection: "row",
  },
  addButtonContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.05)",
    position: "fixed",
    bottom: 0,
    // marginBottom: 20,
    width: "100%",
    // border: "1px solid red",
    // filter: "blur(8px)",
    // webkitFilter: "blur(8px)"
  },
};
