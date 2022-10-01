import { Outlet } from 'react-router-dom';

import { Navigation, Title } from '@app/components';
import { Container } from '@app/layouts';

export const MainTemplate = () => {
  return (
    <>
      <header>
        <Container>
          <div style={{ paddingBottom: 20, textAlign: 'center' }}>
            <Title variant="h1">React + Redux + Firebase + Authorize + TypeScript</Title>
            <Title variant="h3">Some static content</Title>
          </div>
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
