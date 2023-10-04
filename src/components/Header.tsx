import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const HEADER_HEIGHT = 100;

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
      <div style={{ height: `${HEADER_HEIGHT}px` }}></div>
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
  z-index: 999;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Item = styled.div`
  position: relative;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fc788e;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -14px;
`;

export default Header;
