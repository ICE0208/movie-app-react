import styled from 'styled-components';
import { IMovie, makeImagePath } from '../api';

function MovieItem({ movie }: { movie: IMovie }) {
  return (
    <Item>
      <Img src={makeImagePath(movie.poster_path)} />
      <Title>{movie.title}</Title>
    </Item>
  );
}
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
export default MovieItem;
