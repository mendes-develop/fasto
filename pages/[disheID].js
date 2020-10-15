import { Fragment } from "react";
import { loadDishes, setDish } from "../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

console.log("hello");

const Container = styled.div`
  flex: 1;
  justify-content: "center";
  background-color: "#fff";
`;

const Image = styled.img.attrs((/* props */) => ({
  src: "/download.jpg",
}))`
width: 100%;
  /* height: 200; */
`;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  bottomText: {
    textAlign: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  image: {},
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  dismissContainer: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    zIndex: 99,
  },
  addDishContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 20,
    flexDirection: "row",
  },
  subtitleContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  addButtonContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.0)",
  },
};

const About = (props) => {

    const state = useSelector((state) => state.main);
    console.log(state)

  return (
    <Container>
      <Image />
      <h1>Guacamole</h1>
      <p>{props.name}</p>

    </Container>
  );
};

export default About;
