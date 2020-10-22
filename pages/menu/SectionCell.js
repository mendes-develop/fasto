import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setDish } from "../../redux/actions/main";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native-web";

function SectionCell({ section }) {
  const styles = StyleSheet.create({
    sectionContainer: {
      justifyContent: "center",
      backgroundColor: "white",
      flex: 1,
      display: "flex",
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: "bold",
      backgroundColor: "#f1f1f1",
      padding: 10,
    },
    sectionItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 8,
      display: "flex",
      flex: 1,
      borderBottomColor: "pink",
      borderBottomWidth: 1,
    },
    left: {
      display: "flex",
      flex: 3,
      width: "100%",
    },
    right: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      flexWrap: "nowrap",
      width: "30%",
    },
    itemName: {
      fontSize: 18,
      fontWeight: 500,
      paddingBottom: 5,
      paddingTop: 5,
    },
    ingredients: {
      paddingBottom: 5,
      fontStyle: "italic",
      color: "gray",
    },
    price: {
      fontSize: 18,
      textAlign: "center",
      justifyContent: "center",
      fontWeight: 500,
      display: "flex",
    },
  });

  const formatPrice = (price) => (price / 100).toFixed(2);

  const formatIngredients = (array) => array.join(" ");

  const router = useRouter()
  
  const dispatch = useDispatch()

  const _handleSelectedDish = (dish) => {
    dispatch(setDish(dish));
    router.push(`/${dish.id}`);
  };

  if (!section) return null;

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{section.name}</Text>
      {section.dishes &&
        section.dishes.length &&
        section.dishes.map((dish, index) => (
          <TouchableOpacity onPress={() => _handleSelectedDish(dish)}>
            <View style={styles.sectionItem}>
              <View style={styles.left}>
                <Text style={styles.itemName}>{dish.name}</Text>
                <Text style={styles.ingredients}>{formatIngredients(dish.ingredients)}</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.price}>${formatPrice(dish.price)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
}

export default SectionCell
