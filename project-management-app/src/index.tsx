import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { store } from './store';
import App from './App';

import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';
import './styles/index.scss';
import Loading from './components/Loading';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={baseTheme}>
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </ErrorBoundary>
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);
