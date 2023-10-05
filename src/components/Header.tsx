import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const HEADER_HEIGHT = 80;

function Header() {
  const popularMatch = useMatch('/');
  const comingSoonMatch = useMatch('/coming-soon');
  const nowPlayingMatch = useMatch('/now-playing');

  return (
    <>
      <Nav>
        <Items>
          <Item>
            <Link to="/">POPULAR</Link>
            {popularMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/coming-soon">COMING SOON</Link>
            {comingSoonMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/now-playing">NOW PLAYING</Link>
            {nowPlayingMatch && <Circle layoutId="circle" />}
          </Item>
        </Items>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-bottom: 4px solid whitesmoke;
`;

const Items = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const Item = styled.span`
  position: relative;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fc788e;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -14px;
`;

export default Header;
