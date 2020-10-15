import { loadDishes, setDish } from "../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

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

const Container = styled.div``;

const Index = (props) => {
  const { dishes, ...rest } = useSelector((state) => state.main);
  const router = useRouter();
  const dispatch = useDispatch();
console.log("props", props)
  useEffect(() => {
    dispatch(loadDishes());
  }, []);

  function _handleSelectedDish(item) {
    dispatch(setDish(item));
    router.push(`/${item.id}`)
  }

  const Item = ({ item, dispatchDish }) => {
    const formattedPrice = (item.price / 100).toFixed(2);
    const { name, price, ingredients } = item;

    return (
      <StyledItem onClick={() => _handleSelectedDish(item)}>
        <Container>
          <Styledh3>{item.name}</Styledh3>
          <Styledp>{item.ingredients.join(", ")}</Styledp>
        </Container>
        <Price>
          <Styledh3>{`$${formattedPrice}`}</Styledh3>
        </Price>
      </StyledItem>
    );
  };

  return (
    <Layout>
      <h1>Menu</h1>
      {dishes && dishes.map((item, index) => <Item item={item} key={index} id={index} />)}
    </Layout>
  );
};

export default Index;
