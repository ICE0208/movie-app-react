import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Detail } from '.';
import { AnimatePresence, Variants, motion } from 'framer-motion';

function Overlay({ movieId }: { movieId?: string }) {
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
      <AnimatePresence>
        {movieId && (
          <Background
            onClick={containerClick}
            variants={backVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
      {movieId && <Detail movieId={movieId} />}
    </>
  );
}

export default Overlay;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const backVariants: Variants = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  animate: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  exit: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};
