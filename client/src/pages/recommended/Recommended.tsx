import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from '../home/queries';
import { useMovies } from '../../hooks/useMovies/useMovies';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Recommended = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const [params, setParams] = useSearchParams();
  const ids = new URLSearchParams(params).get('ids')?.split(',');
  const title = new URLSearchParams(params).get('title');
  console.log('ids', ids);

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids } });

  return (
    <div>
      Recommended: {params} {title}
    </div>
  );
};

export default Recommended;
