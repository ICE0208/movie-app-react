import { useParams } from 'react-router-dom';

function Overlay() {
  const params = useParams();

  console.log(params);

  return <h1>Overlay</h1>;
}

export default Overlay;
