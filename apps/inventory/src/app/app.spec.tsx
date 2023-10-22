// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App'; // Assuming your component file is named App.js

test('renders ProductList component', () => {
  const { getByText } = render(<App />);
  const productListElement = getByText(/ProductList/i);
  //expect(productListElement).toBeCalled();
});
