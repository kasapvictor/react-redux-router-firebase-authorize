import { Outlet } from 'react-router-dom';

import { Navigation } from '@app/components/Navigation';
import { Container } from '@app/layouts';

export const MainTemplate = () => {
  return (
    <>
      <header>
        <Container>
          <h1>Hello CodeSandbox</h1>
          <h2>Static content</h2>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container>Footer &copy; {new Date().getFullYear()} by Victor Kasap</Container>
      </footer>
    </>
  );
};
