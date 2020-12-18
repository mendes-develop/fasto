import styled from "styled-components";
import Navbar from "./Navbar";
import {colors }from '../utils/colors'

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  background-color: ${colors.ghostWhite};
  border: 1px solid red;
`;
const HelpButton = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 10px;
  right: 15px;
  border: 1px solid ${colors.lightOrange};
  background-color: ${colors.orange};
  border-radius: 50%;
`;

const Layout = (props) => {
  return (
    <Container>
      <Navbar />
      {props.children}
      <HelpButton />
    </Container>
  );
};

export default Layout;
