import styled from 'styled-components';
import { IMovie, makeImagePath } from '../api';
import { Variants, motion } from 'framer-motion';

function MovieItem({ movie }: { movie: IMovie }) {
  return (
    <Item variants={itemVariants}>
      <Img src={makeImagePath(movie.poster_path)} />
      <Title>{movie.title}</Title>
    </Item>
  );
}
const Item = styled(motion.div)`
  border-radius: 20px;
`;

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.7 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const Img = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled.div`
  padding: 20px 4px;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
`;
export default MovieItem;
