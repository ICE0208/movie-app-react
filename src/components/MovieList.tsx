import styled from 'styled-components';
import { IMovie } from '../api';
import { MovieItem } from '.';

function MovieList({ movies }: { movies: IMovie[] }) {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 260px);
  grid-gap: 44px 30px;
  width: 100%;
  justify-content: center;
`;

export default MovieList;
