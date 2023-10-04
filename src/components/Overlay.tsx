import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Detail } from '.';
import { motion } from 'framer-motion';

function Overlay({ movieId }: { movieId: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const containerClick = () => {
    const urlWithoutParams = location.pathname.replace(
      new RegExp(`/${movieId}.*$`),
      '',
    );

    navigate(urlWithoutParams);
  };

  return (
    <>
      {movieId && (
        <>
          <Container onClick={containerClick} />
          <Detail movieId={movieId} />
        </>
      )}
    </>
  );
}

export default Overlay;

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
