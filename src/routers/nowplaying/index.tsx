import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getNowPlaying } from '../../api';
import { MovieList, Overlay } from '../../components';

function NowPlaying() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'nowplaying'],
    queryFn: getNowPlaying,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <>
          <MovieList movies={data?.results || []} />
          <Overlay />
        </>
      )}
    </Wrapper>
  );
}

export default NowPlaying;
