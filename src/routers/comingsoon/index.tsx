import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getComingSoon } from '../../api';
import { MovieList, Overlay } from '../../components';
import { useParams } from 'react-router-dom';

function ComingSoon() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'comingsoon'],
    queryFn: getComingSoon,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const params = useParams<{ movieId?: string }>();

  return (
    <Wrapper $preventScroll={Boolean(params.movieId)}>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <>
          <MovieList movies={data?.results || []} />
          {params.movieId && <Overlay movieId={params.movieId} />}
        </>
      )}
    </Wrapper>
  );
}

export default ComingSoon;
