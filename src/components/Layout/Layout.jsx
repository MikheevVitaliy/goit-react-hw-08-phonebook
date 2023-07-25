import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
      <GlobalStyle />
    </Container>
  );
};
