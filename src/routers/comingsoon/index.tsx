import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getComingSoon } from '../../api';
import { Loading, MovieList, Overlay } from '../../components';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ComingSoon() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'comingsoon'],
    queryFn: getComingSoon,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const params = useParams<{ movieId?: string }>();

  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <Wrapper $preventScroll={Boolean(params.movieId)}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <MovieList movies={data?.results || []} />
            <Overlay movieId={params.movieId} />
          </>
        )}
      </Wrapper>
    </>
  );
}

export default ComingSoon;
