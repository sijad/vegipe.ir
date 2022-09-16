import { useEffect } from "react";
import Router from "next/router";
import { getLinkCount } from "../links";
import type { GetStaticProps } from "next";

function RandomRecipe({ count }: { count: number }): null {
  useEffect(() => {
    Router.replace(`/recipes/${randomNumber(count)}`);
  }, [count]);

  return null;
}

function randomNumber(to: number): number {
  return Math.floor(Math.random() * to);
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { count: getLinkCount() },
  };
};

export default RandomRecipe;
