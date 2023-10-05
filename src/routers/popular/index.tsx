import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getPopular } from '../../api';
import { MovieList, Overlay } from '../../components';
import { useParams } from 'react-router-dom';

function Popular() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'popular'],
    queryFn: getPopular,
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
          <Overlay movieId={params.movieId} />
        </>
      )}
    </Wrapper>
  );
}

export default Popular;
