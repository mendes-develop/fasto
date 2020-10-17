import * as t from "../types";
import { v4 as uuidv4 } from "uuid";

export const loadDishes = () => async (dispatch) => {
//   async function timeout() {
//     setTimeout(() => {console.log("hello")}, 1000);
//   }
//   const data = await timeout("www.restarant/dishes")
//   console.log("fetching: www.restarant/dishes");

  const item = {
    id: uuidv4(),
    name: "Guacamole",
    price: 1690,
    ingredients: ["Avocado", "Tomato", "Onions", "Cilantro", "Lemon", "Bell Pepper"],
    description:
      "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  };
  const dishes = new Array(20).fill(item);

  //   console.log(dishes)

  dispatch({
    type: t.LOAD_DISHES,
    payload: dishes,
  });
};

export const setDish = (dish) => async (dispatch) => {
  dispatch({
    type: t.SET_DISH,
    payload: dish,
  });
};
