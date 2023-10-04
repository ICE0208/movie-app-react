import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getPopular } from '../../api';
import { MovieList, Overlay } from '../../components';

function Popular() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'popular'],
    queryFn: getPopular,
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

export default Popular;
