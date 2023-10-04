import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const HEADER_HEIGHT = 7.2;

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
  height: ${HEADER_HEIGHT}vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 1;
  border-bottom: 4px solid whitesmoke;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-size: min(36px, 2.5vw);
  font-weight: bold;
  color: white;
  width: 100%;
  padding: 0 14vw;
  padding-bottom: 2.2vw;
`;

const Item = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  text-align: center;
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
