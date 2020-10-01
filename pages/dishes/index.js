import Layout from "../../components/Layout";
// import Navbar from "../components/Navbar";
import styled from "styled-components";
import Link from "next/link";

const item = {
  name: "Guacamole",
  price: 1690,
  ingredients: ["Avocado", "Tomato", "Onions", "Cilantro", "Lemon", "Bell Pepper"],
  description:
    "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
};
const data = new Array(20).fill(item);

const StyledItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;

  border-top: 1px solid blue;
  display: flex;
  /* height: 80px; */
`;

const Styledp = styled.p`
  display: block;
  border: 1px solid black;
  margin-right: 10px;
  font: 13px;
`;
const Styledh3 = styled.h3`
  margin: 5px;
`;
const Price = styled.div`
  /* border: 1px solid green; */
  padding: 5px;
`;
const Quanatity = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0; /* stick to bottom */
`;

const StyledModal = styled.div`
  /* display: flex; Hidden by default */

  visibility: ${({ item }) => !item && `hidden`};
  flex-direction: column;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: white;
  border: 1px solid red;
  div {
    color: #aaaaaa;
    border: 1px solid blue;
    /* float: right; */
    font-size: 28px;
    font-weight: bold;
  }
`;
const Modal = () => {
  return (
    <StyledModal showModal={false}>
      <div>Close</div>
      <Quanatity>hello</Quanatity>
    </StyledModal>
  );
};

const Item = ({ item, setItem, id }) => {
    const formattedPrice = (item.price / 100).toFixed(2);
    // console.log(item)
    const {name, price, ingredients} = item

  const urlParams = new URLSearchParams(item).toString();

  return (
    <Link href={`/dishes/id?${urlParams}`} as={`/dishes/${id}`}>
      <StyledItem onClick={() => setItem(item)}>
        <div>
          <Styledh3>{item.name}</Styledh3>
          <Styledp>{item.ingredients.join(", ")}</Styledp>
        </div>
        <Price>
          <h4>{`$${formattedPrice}`}</h4>
        </Price>
      </StyledItem>
    </Link>
  );
};

const Index = () => {
  const [choosenItem, setItem] = React.useState(null);

  return (
    <Layout>
      <h1>Menu</h1>
      {data.map((item, index) => (
        <Item setItem={setItem} item={item} key={index} id={index}/>
      ))}
      <Modal item={choosenItem} />
    </Layout>
  );
};

export default Index;
