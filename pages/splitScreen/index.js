import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import SplitCell from "../../components/SplitCell";
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

  console.log(height, width);

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // border: "1px solid red",
      // height: "100%",
      // overflow: "hidden",
    },
    buttonContainer: {
      // display: "flex",
      // border: `1px solid red`,
      flex: 1,
      position: "fixed",
      width: "100%",
      padding: 1,
      // height: "200px",
      flexDirection: "row",
      justifyContent: "flex-end",
      top: 47,
    },
    button: {
      height: 50,
      width: 50,
      border: "1px solid red",
      // marginTop: 10,
      marginRight: 5,
    },
    image: {
      padding: 8,
    },
    flatList: {
      height: flatListHeight,
      marginTop: 100,
      // position: "fixed",
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
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "400",
      fontSize: 25,
      textAlignVertical: "center",
      textAlign: "center",
    },
  });

  const ToggleButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Image
              style={styles.button}
              source={{
                uri: "./avatar.png",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Image
              style={styles.button}
              source={{
                uri: "./avatar.png",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Image
              style={styles.button}
              source={{
                uri: "./avatar.png",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
      <SafeAreaView style={styles.container}>
        <ToggleButton />
        <FlatList
          data={props.data}
          renderItem={({ item, index }) => <SplitCell key={index} section={item} />}
          keyExtractor={(item, index) => item.id + index}
          style={styles.flatList}
        />
        <PayButtons />
      </SafeAreaView>
      <style global jsx>{`

      `}</style>
    </Layout>
  );
};

SplitScreen.defaultProps = {
  data: [1, 2, 3, 4, 8, 8, 8],
};

export default SplitScreen;
