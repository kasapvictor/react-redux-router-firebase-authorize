import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderStore } from 'react-redux';

import { store } from '@app/store';
import { App } from '@app/App';
import '@app/firebase';

const init = () => {
  const rootContainer = document.getElementById('root');

  if (rootContainer) {
    const root = createRoot(rootContainer);

    root.render(
      <ProviderStore store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderStore>,
    );
  }
};

init();
