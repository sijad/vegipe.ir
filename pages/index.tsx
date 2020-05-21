import { useEffect } from 'react';
import Router from 'next/router';

function Home() {
  useEffect(() => {
    Router.replace('/random-recipe');
  }, []);
  return null;
}

export default Home;
