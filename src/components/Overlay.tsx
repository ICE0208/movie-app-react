import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Detail } from '.';

function Overlay() {
  const params = useParams<{ movieId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const containerClick = () => {
    const urlWithoutParams = location.pathname.replace(
      new RegExp(`/${params.movieId}.*$`),
      '',
    );

    navigate(urlWithoutParams);
  };

  return (
    <>
      {params.movieId && (
        <Container onClick={containerClick}>
          <Detail movieId={params.movieId} />
        </Container>
      )}
    </>
  );
}

export default Overlay;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
