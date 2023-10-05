import styled from 'styled-components';

function Loading() {
  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 48px;
`;
