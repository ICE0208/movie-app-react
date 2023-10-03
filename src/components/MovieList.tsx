import styled from 'styled-components';
import { IMovie, makeImagePath } from '../api';

function MovieList({ movies }: { movies: IMovie[] }) {
  return (
    <Container>
      {movies.map((item) => (
        <Item key={item.id}>
          <Img src={makeImagePath(item.poster_path)} />
          <Title>{item.title}</Title>
        </Item>
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

const Item = styled.div`
  border-radius: 20px;
`;

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

export default MovieList;
