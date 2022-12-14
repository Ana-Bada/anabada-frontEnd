import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Loading from './layout/Loading';
import ScrollToTop from './layout/ScrollToTop';

// query error 메세지 띄어줌
function queryErrorHandler(error) {
  console.log('error connecting to sever');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true, // React.Suspense를 쓰기위한 옵션 전달
      onError: queryErrorHandler // error 전체 핸들링
    },
    mutations: {
      suspense: true,
      onError: queryErrorHandler
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ScrollToTop />
          <App />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
);
