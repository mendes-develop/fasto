import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  /* display: flex;
    flex-direction: column; */
  /* border: 1px solid blue; */
  /* box-sizing: content-box; */
`;
const HelpButton = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 10px;
  right: 15px;
  border: 1px solid red;
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
