import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IMovieDetail, getMovie, makeBgPath, makeImagePath } from '../api';
import { useQuery } from '@tanstack/react-query';

function Detail({ movieId }: { movieId: string }) {
  const { data, isLoading } = useQuery<IMovieDetail>({
    queryKey: ['movies', 'detail', `${movieId}`],
    queryFn: () => getMovie(movieId),
    retry: false,
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <Container layoutId={movieId}>
      {!isLoading && (
        <>
          <Img $bgPhoto={makeImagePath(data?.backdrop_path ?? '') ?? ''} />
          <Texts>
            <div style={{ height: '30vh' }}>Text1</div>
            <div style={{ height: '30vh' }}>Text2</div>
            <div style={{ height: '30vh' }}>Text3</div>
          </Texts>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled(motion.div)`
  width: 700px;
  height: 80vh;
  position: fixed;
  inset: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Img = styled.div<{ $bgPhoto: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
  width: 100%;
  min-height: 340px;
`;

const Texts = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
