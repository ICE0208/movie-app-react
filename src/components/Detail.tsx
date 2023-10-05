import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IMovieDetail, getMovie, makeImagePath } from '../api';
import { useQuery } from '@tanstack/react-query';
import { formatMoney, formatRating, formatTime } from '../utils';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Loading } from '.';

function Detail({
  movieId,
  goBackFn,
}: {
  movieId: string;
  goBackFn: () => void;
}) {
  const { data, isLoading } = useQuery<IMovieDetail>({
    queryKey: ['movies', 'detail', `${movieId}`],
    queryFn: () => getMovie(movieId),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Container layoutId={movieId}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Close
            onClick={goBackFn}
            initial={{
              border: '2px solid rgba(255, 255, 255, 0)',
            }}
            animate={{
              border: '2px solid rgba(255,255,255,0)',
              transition: { duration: 0.2 },
            }}
            whileHover={{
              border: '2px solid rgba(255,255,255,0.8)',
              transition: { duration: 0.2 },
            }}
            whileTap={{
              border: '2px solid rgba(255,255,255,1)',
              transition: { duration: 0.2 },
            }}
          >
            <XMarkIcon />
          </Close>
          <Img $bgPhoto={makeImagePath(data?.backdrop_path ?? '') ?? ''} />
          <Texts>
            <Title>{data?.title}</Title>
            <OverView>{data?.overview}</OverView>
            <InfoBox>
              <InfoText>Budget: {formatMoney(data?.budget)}</InfoText>
              <InfoText>Revenue: {formatMoney(data?.revenue)}</InfoText>
              <InfoText>Runtime: {formatTime(data?.runtime)}</InfoText>
              <InfoText>Rating: {formatRating(data?.vote_average)}</InfoText>
              <InfoText>Homepage: {data?.homepage}</InfoText>
            </InfoBox>
          </Texts>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled(motion.div)`
  width: 600px;
  height: 700px;
  position: fixed;
  inset: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const Img = styled.div<{ $bgPhoto: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
  width: 100%;
  min-height: 240px;
`;

const Texts = styled.div`
  padding: 10px 32px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  padding: 10px 0;
`;

const OverView = styled.p`
  font-size: 18px;
  padding: 8px 0;
`;

const InfoBox = styled.div`
  padding: 14px 0;
`;
const InfoText = styled.p`
  font-size: 16px;
  padding: 3px 0;
`;

const Close = styled(motion.div)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 36px;
  height: 36px;
  padding: 4px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  box-sizing: border-box;
`;
