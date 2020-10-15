import App from "next/App";
import React from 'react'
import { Provider } from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import store from '../redux/store'
import "../style.css";

function MyApp(props) {

  // static async getInitialProps({ Component, ctx }) {
  //   const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   console.log(appProps);
  //   return {
  //     appProps,
  //   };
  // }
  // render() {
    const { Component, pageProps } = props;
    return (
      <Provider store={store}>
        <Component  {...pageProps} ronaldo={true}/>
      </Provider>
    );
  // }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
