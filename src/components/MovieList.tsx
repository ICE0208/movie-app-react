import styled from 'styled-components';
import { IMovie } from '../api';
import { MovieItem } from '.';
import { Variants, motion } from 'framer-motion';

function MovieList({ movies }: { movies: IMovie[] }) {
  const sortedMovies = [...movies].sort(
    (a, b) => b.vote_average - a.vote_average,
  );

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      {sortedMovies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-gap: 30px 24px;
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
