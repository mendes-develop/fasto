import App from "next/App";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import "../style.css";

function MyApp(props) {

  // Empty props
  const { Component, pageProps } = props;

  // console.log("Page Props", pageProps)

  // Client Side Redux Store and Application
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
  // }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
