import * as React from 'react';
import { AppProps } from 'next/app';
import '../style.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="w-full text-center absolute py-4 bottom-0 border-on-background">
        <div className="w-full flex items-center justify-center text-sm">
          <a
            className="hover:underline"
            href="https://github.com/sijad/vegipe.ir"
          >
            {'در توسعه این وبسایت مشارکت کنید'}
          </a>
        </div>
        <div className="w-full flex items-center justify-center text-sm">
          {'طراحی شده با'}
          <svg
            className="mr-1 h-5 w-5 text-red-700"
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

export default App;
