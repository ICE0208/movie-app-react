import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getNowPlaying } from '../../api';
import { MovieList } from '../../components';

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
        <MovieList movies={data?.results || []} />
      )}
    </Wrapper>
  );
}

export default NowPlaying;
