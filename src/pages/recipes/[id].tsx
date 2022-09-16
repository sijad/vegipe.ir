import * as React from "react";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import NextLink from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Link, getLink, getLinkCount } from "../../links";
import Error from "next/error";

function Recipe({ link }: { link: Link | null }): JSX.Element {
  useEffect(() => {
    if (!link) {
      Router.replace("/random-recipe");
    }
  }, [link]);

  if (!link) {
    return <Error statusCode={404} />;
  }

  const { title, url } = link;

  return (
    <>
      <Head>
        <title>{`دستور آشپزی ${title} گیاهی`}</title>
      </Head>
      <div className="p-5 m-auto text-xl text-center lg:w-1/2">
        <div>
          {"نظرت در مورد اینکه "}
          <a className="text-4xl font-bold text-gray-800 underline" href={url}>
            {title}
          </a>
          {" درست کنی چیه؟"}
        </div>
        <div className="mt-10">
          <NextLink href="/random-recipe">
            <a className="text-gray-800 hover:underline">
              {"نه خوشم نمیاد! یه چی دیگه معرفی کن"}
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
    props: {
      link: getLink(parseInt(context?.params?.id?.toString() || "-1", 10)),
    },
  };
};

export default Recipe;
