import styled from 'styled-components';
import { HEADER_HEIGHT } from '../components/Header';

const PADDING = 70;

const Wrapper = styled.div<{ $preventScroll: boolean }>`
  background-color: black;
  color: white;
  padding: ${PADDING}px;
  padding-top: calc(${HEADER_HEIGHT}px + ${PADDING}px);
  overflow-y: ${(props) => (props.$preventScroll ? 'hidden' : 'scroll')};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
`;

export default Wrapper;
