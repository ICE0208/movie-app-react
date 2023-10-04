import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IMovieDetail, getMovie, makeImagePath } from '../api';
import { useQuery } from '@tanstack/react-query';
import { formatMoney, formatRating, formatTime } from '../utils';

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
  padding: 40px 24px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
  padding: 10px 0;
`;

const OverView = styled.p`
  font-size: 24px;
  padding: 8px 0;
`;

const InfoBox = styled.div`
  padding: 10px 0;
`;
const InfoText = styled.p`
  font-size: 20px;
`;
