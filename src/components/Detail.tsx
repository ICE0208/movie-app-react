import { motion } from 'framer-motion';
import styled from 'styled-components';

function Detail({ movieId }: { movieId: string }) {
  console.log(movieId);
  return <Container layoutId={movieId}></Container>;
}

export default Detail;

const Container = styled(motion.div)`
  width: 700px;
  height: 80vh;
  position: fixed;
  inset: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;
