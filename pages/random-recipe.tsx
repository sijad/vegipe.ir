import { useEffect } from 'react';
import Router from 'next/router';
import { getLinkCount } from '../links';

function RandomRecipe({ count }: { count: number }) {
  useEffect(() => {
    Router.replace(`/recipes/${randomNumber(count)}`);
  }, [count]);

  return null;
}

function randomNumber(to: number) {
  return Math.floor(Math.random() * to);
}

export async function getStaticProps() {
  return {
    props: { count: getLinkCount() },
  };
}

export default RandomRecipe;
