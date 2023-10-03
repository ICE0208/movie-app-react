import styled from 'styled-components';
import { IMovie } from '../api';
import { MovieItem } from '.';
import { Variants, motion } from 'framer-motion';

function MovieList({ movies }: { movies: IMovie[] }) {
  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 260px);
  grid-gap: 44px 30px;
  width: 100%;
  justify-content: center;
`;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default MovieList;
