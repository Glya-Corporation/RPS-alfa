import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import showPhrase from '../functions/functions.js';

const Home = () => {
  const phrases = useSelector(state => state.phrases);


  const [phrase, setPhrase] = useState('');
  const [showTraducion, setShowTraducion] = useState(false);

  useEffect(() => {
    setPhrase(showPhrase(phrases));
  }, [phrases]);

  const exit = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div>
      <button onClick={() => setShowTraducion(!showTraducion)}>Traduction</button>
      <button onClick={() => exit()}>Si</button>
      <button onClick={() => exit()}>No</button>
      <h3>{phrase.text}</h3>
      {showTraducion && <h3>{phrase.traduction}</h3>}
    </div>
  );
};

export default Home;
