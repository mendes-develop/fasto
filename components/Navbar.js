import Link from "next/link";
import styled from "styled-components";

const Nav = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  background: #222;
  padding: 0 15px;
  list-style-type: none;
  height: 55px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
  }

  img{

  }
`;

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="Girl in a jacket" width="50" height="50"/>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
