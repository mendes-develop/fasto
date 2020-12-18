import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SplitCell from "../../components/SplitCell";
import Tab from "./Tab";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { colors } from "../../utils/colors";
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
import { Button } from "../../components/AddToCartButton";

const white = "#ffffff";

const Table = styled.div`
  position: fixed;
  top: 170px;
  width: 100%;
  background-color: ${colors.ghostWhite};
  /* border-top: 1px solid red; */
  max-height: 400px;
  overflow: scroll;
`;
const Line = styled.div`
  width: 30%;
  /* float: right; */

  margin: auto;
  border: 1px;
  border-top: dashed ${colors.darkBlue};
  border-width: 1px;
  margin-right: 15px;
`;
const TotalContainer = styled.div`
  width: 100%;
  position: fixed;
  right: 0%;
  left: 0;
  top: 94px;
  padding-top: 5px;
  justify-content: center;
  /* border: 1px solid red; */
`;
const Total = styled.p`
  /* width: 100%; */
  /* padding: 0 -15px; */
  /* border: 1px solid red; */
  /* position: fixed; */
  text-align: right;
  padding-right: 15px;
  margin: 3px;
  /* top: 100px; */
`;

const SplitScreen = (props) => {
  const { height, width } = Dimensions.get("window");
  const flatListHeight = height - 4 * 48 - 40;

  const [tab, setTab] = useState("equal");
  const [usersSelected, addUserSelected] = useState({});
  const [total, setTotal] = useState(231_67);

  const convertToCurrency = (val) => (val / 100).toFixed(2);

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
      position: "fixed",
      top: 165,
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
        <Button style={styles.payButton}>Pay All</Button>
        <Button style={styles.payButton}>Split</Button>
      </View>
    );
  };

  return (
    <Layout>
      <Tab setTab={setTab} selected={tab} />
      <TotalContainer>
        <Total>SubTotal: ${convertToCurrency(total)}</Total>
        <Total>Tax: ${convertToCurrency(total * 0.1)}</Total>
        <Line/>
        <Total>Total: ${convertToCurrency(total + total * 0.1)}</Total>
      </TotalContainer>
      <Table>
        {props.data.map((item, index) => (
          <SplitCell
            tab={tab}
            addUserSelected={addUserSelected}
            selected={usersSelected[item.id]}
            key={index}
            section={item}
          />
        ))}
      </Table>
      <PayButtons />
      <style global jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
};

const data = (n = 1) => {
  const data = [];
  for (let i = 0; i <= n; i++) {
    data.push({ id: uuidv4(), imageUrl: "./avatar.png", name: "Tautology125", amount: 20050, selected: true });
  }
  return data;
};

// console.log(data(3));

SplitScreen.defaultProps = {
  data: data(6),
};

export default SplitScreen;
