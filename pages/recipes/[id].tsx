import * as React from 'react';
import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NextLink from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Link, getLink, getLinkCount } from '../../links';

function Recipe({ link }: { link: Link | null }) {
  useEffect(() => {
    if (!link) {
      Router.replace('/random-recipe');
    }
  }, [link]);

  if (!link) {
    // TODO instead of redirecting use try to show a proper page
    // to let use know link has been removed.
    return null;
  }

  const { title, url } = link;

  return (
    <>
      <Head>
        <title>{`دستور آشپزی ${title} گیاهی`}</title>
      </Head>
      <div className="p-5 text-center text-xl lg:w-1/2 m-auto">
        <div>
          {'نظرت در مورد اینکه '}
          <a className="text-4xl text-gray-800 font-bold underline" href={url}>
            {title}
          </a>
          {' درست کنی چیه؟'}
        </div>
        <div className="mt-10">
          <NextLink href="/random-recipe">
            <a className="text-gray-800 hover:underline" href="/random-recipe">
              {'نه خوشم نمیاد! یه چی دیگه معرفی کن'}
            </a>
          </NextLink>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from({ length: getLinkCount() }).map((_, id) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { link: getLink(parseInt(context.params.id.toString(), 10)) },
  };
};

export default Recipe;
