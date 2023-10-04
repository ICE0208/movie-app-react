import styled from 'styled-components';

function Detail({ movieId }: { movieId: string }) {
  console.log(movieId);
  return <Container></Container>;
}

export default Detail;

const Container = styled.div`
  width: 700px;
  height: 80vh;
  position: absolute;
  inset: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;
