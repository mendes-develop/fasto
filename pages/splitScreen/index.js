import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SplitCell from "../../components/SplitCell";
import Tab from "./Tab";
import { v4 as uuidv4 } from "uuid";
import {
  SectionList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native-web";

const SplitScreen = (props) => {
  const { height, width } = Dimensions.get("window");
  const flatListHeight = height - 4 * 48 - 40;

  const [tab, setTab] = useState("equal");
  const [usersSelected, addUserSelected] = useState({});

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // border: "1px solid red",
      // height: "100%",
      // overflow: "hidden",
    },
    image: {
      padding: 8,
    },
    flatList: {
      height: flatListHeight,
      marginTop: 150,
      position: "fixed",
      // paddingTop: 100,
      border: "1px solid red",
    },
    bottomButtonContainer: {
      // flex: 2,
      // border: "5px solid green",
      position: "fixed",
      bottom: 0,
      right: 0,
      left: 0,
      padding: "20px",
      // height: "50px",
    },
    payButton: {
      border: "1px solid red",
      margin: 5,
      padding: 8,
      marginTop: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "400",
      fontSize: 25,
      textAlignVertical: "center",
      textAlign: "center",
    },
  });

  const PayButtons = () => {
    return (
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity>
          <Text style={styles.payButton}>Pay All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.payButton}>Split</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Layout>
      {/* <SafeAreaView style={styles.container}> */}
        <Tab setTab={setTab} selected={tab} />
        <FlatList
          data={props.data}
          renderItem={({ item, index }) => (
            <SplitCell
              tab={tab}
              addUserSelected={addUserSelected}
              selected={usersSelected[item.id]}
              key={index}
              section={item}
            />
          )}
          keyExtractor={(item, index) => item.id + index}
          style={styles.flatList}
        />
        <PayButtons />
      {/* </SafeAreaView> */}
      <style global jsx>{`body{overflow: hidden;}`}</style>
    </Layout>
  );
};

const data = () => {
  const data = [];
  for (let i = 0; i <= 3; i++) {
    data.push({ id: uuidv4(), imageUrl: "./avatar.png", name: "Tautology125", amount: 20050, selected: true });
  }
  return data;
};

// console.log(data(3));

SplitScreen.defaultProps = {
  data: data(3),
};

export default SplitScreen;
