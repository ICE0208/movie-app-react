import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Items>
        <Item>
          <Link to="/">POPULAR</Link>
        </Item>
        <Item>
          <Link to="/coming-soon">COMING SOON</Link>
        </Item>
        <Item>
          <Link to="/now-playing">NOW PLAYING</Link>
        </Item>
      </Items>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  height: 64px;
  background-color: red;
`;

const Items = styled.div``;

const Item = styled.div``;

export default Header;
