import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getNowPlaying } from '../../api';
import { Loading, MovieList, Overlay } from '../../components';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NowPlaying() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'nowplaying'],
    queryFn: getNowPlaying,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const params = useParams<{ movieId?: string }>();

  return (
    <>
      <Helmet>
        <title>Now Playing</title>
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

export default NowPlaying;
