import { render } from '@testing-library/react';
import { App } from './App';

it('App Test', () => {
  const result = render(<App />);

  expect(result.getByAltText('main logo')).toBeInTheDocument();
});
