import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@common/store';
import { App } from './App';

it('App Test', () => {
  const result = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  expect(result.getByAltText('main logo')).toBeInTheDocument();
});
