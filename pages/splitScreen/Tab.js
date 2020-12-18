import { loadDishes, setDish } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SplitCell from "../../components/SplitCell";
import styled from "styled-components";
import { colors } from "../../utils/colors.js";

const blue = "rgb(14, 122, 254)";
const white = "#ffffff";

function borderRadius(props) {
  const { middle, first, last } = props;
  if (middle) return null;
  if (first) return "5px 0px 0px 5px";
  if (last) return "0px 5px 5px 0px";
}
const Banner = styled.div`
  width: 100%;
  position: fixed;
  top: 47px;
  justify-content: center;
`;

const Tab = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 15px;
  border: 1px solid ${colors.blue};
  border-radius: 5px;
  background-color: ${colors.blue};
`;

const StyledButton = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  flex: 1;
  border-radius: ${(props) => borderRadius(props)};
  background-color: ${({ selected }) => (selected ? colors.blue : colors.ghostWhite)};
  color: ${({ selected }) => (selected ? colors.ghostWhite : colors.blue)};
  ${({ middle }) =>
    middle &&
    `
    border-left: 1px solid ${colors.blue};
    border-right: 1px solid ${colors.blue};

    `};
`;

const ToggleButton = (props) => {
  const { setTab, selected } = props;

  return (
    <Banner>
      <Tab>
        <StyledButton first onClick={(e) => setTab("equal")} selected={selected === "equal"}>
          Equal
        </StyledButton>
        <StyledButton middle onClick={(e) => setTab("order")} selected={selected === "order"}>
          Per order
        </StyledButton>
        <StyledButton last onClick={(e) => setTab("custom")} selected={selected === "custom"}>
          Custom
        </StyledButton>
      </Tab>
    </Banner>
  );
};

export default ToggleButton;
