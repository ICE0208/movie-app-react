import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getComingSoon } from '../../api';
import { MovieList } from '../../components';

function ComingSoon() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'comingsoon'],
    queryFn: getComingSoon,
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

export default ComingSoon;
