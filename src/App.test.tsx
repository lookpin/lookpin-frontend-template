import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

it('App Test', () => {
  const result = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(result.getByAltText('main logo')).toBeInTheDocument();
});
