// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App'; // Assuming your component file is named App.js

test('renders routes correctly', () => {
  render(
    <MemoryRouter initialEntries={['/products']}>
      <App />
    </MemoryRouter>
  );

  // Test if the ProductList component is rendered when the route is /products
  const productListElement = screen.getByText(/ProductList/i);
  //expect(productListElement).toBeCalled();

  // Similarly, you can write tests for other routes and components
});
