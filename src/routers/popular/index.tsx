import { useQuery } from '@tanstack/react-query';
import { Wrapper } from '../../styles';
import { IAPIResponse, getPopular } from '../../api';

function Popular() {
  const { data, isLoading } = useQuery<IAPIResponse>({
    queryKey: ['movies', 'popular'],
    queryFn: getPopular,
    retry: false,
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <Wrapper>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <ul>
          {data?.results.map((movie) => <li key={movie.id}>{movie.title}</li>)}
        </ul>
      )}
    </Wrapper>
  );
}
export default Popular;
