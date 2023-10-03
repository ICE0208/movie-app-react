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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-weight: bold;
  color: white;
`;

const Item = styled.div``;

export default Header;
