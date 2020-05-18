import * as React from 'react';
import Head from 'next/head';
import links from '../links.json';

function Home({ link }: { link?: { title: string; url: string; id: string } }) {
  if (!link) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{'انواع دستورات آشپزی گیاهی'}</title>
      </Head>
      <div className="p-5 text-center text-xl lg:w-1/2 m-auto">
        <div>
          {'نظرت در مورد اینکه '}
          <a
            className="text-4xl text-gray-800 font-bold underline"
            href={link.url}
          >
            {link.title}
          </a>
          {' درست کنی چیه؟'}
        </div>
        <div className="mt-10">
          <a className="text-gray-800 hover:underline" href="/">
            {'نه خوشم نمیاد! یه چی دیگه معرفی کن'}
          </a>
        </div>
      </div>
    </>
  );
}

// TODO we should use getStaticProps in another page and cashe all urls
// then in this page redirec user to a random id, for seo and stuff

export async function getServerSideProps() {
  const link = links[Math.floor(Math.random() * links.length)];
  return {
    props: { link },
  };
}

export default Home;
