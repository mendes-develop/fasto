import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import Link from "next/link";
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
} from "react-native-web";
import SectionCell from "./SectionCell";

const App = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
    },
  });
  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.data}
          ListHeaderComponent={() => <View style={{ height: 47 }} />}
          renderItem={({ item, index }) => <SectionCell key={index + 1} section={item} />}
          keyExtractor={(item, index) => item.id + index}
        />
      </SafeAreaView>
    </Layout>
  );
};

export async function getStaticProps(context) {
  // context = { params }

  // const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await resp.json();

  const resp = await mockFetch();
  const data = JSON.parse(resp);

  return {
    props: {
      data,
    },
    revalidate: 1000,
  };
}

export default App;

function mockFetch() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const item = {
        id: uuidv4(),
        name: "Guacamole",
        price: 1690,
        ingredients: ["Avocado", "Tomato", "Onions", "Cilantro", "Lemon", "Bell Pepper"],
        description:
          "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      };

      const section = {
        id: uuidv4(),
        name: "Starters",
        dishes: new Array(5).fill(item),
      };

      resolve(JSON.stringify(new Array(5).fill(section)));
    }, 100);
  });

  return promise;
}
