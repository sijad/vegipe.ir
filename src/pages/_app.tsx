import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
      <footer className="absolute bottom-0 py-4 w-full text-center border-on-background">
        <div className="flex justify-center items-center w-full text-sm">
          <a
            className="hover:underline"
            href="https://github.com/sijad/vegipe.ir"
          >
            {"در توسعه این وبسایت مشارکت کنید"}
          </a>
        </div>
        <div className="flex justify-center items-center w-full text-sm">
          {"طراحی شده با"}
          <svg
            className="mr-1 w-5 h-5 text-red-700"
            fill="currentColor"
            id="heart"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
