import styled from 'styled-components';
import { IMovie, makeImagePath } from '../api';
import { Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MovieItem({ movie }: { movie: IMovie }) {
  return (
    <Item
      variants={itemVariants}
      // whileHover={{ scale: 1.2 }} <- why bug?
    >
      <Link to={`${movie.id}`}>
        <Img
          layoutId={String(movie.id)}
          src={makeImagePath(movie.poster_path)}
          whileHover={{ scale: 1.1, y: -30 }}
        />
      </Link>
      <Title>{movie.title}</Title>
    </Item>
  );
}

const Item = styled(motion.div)`
  border-radius: 20px;
`;

const itemVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const Img = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 4%;
`;

const Title = styled.div`
  padding: 20px 4px;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`;
export default MovieItem;
