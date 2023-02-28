import '../styles/font.css';
import 'tailwindcss/tailwind.css';
import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { defaultQueryClientOptions } from '../quries/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: defaultQueryClientOptions })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
