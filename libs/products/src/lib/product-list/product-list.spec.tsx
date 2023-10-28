import { render } from '@testing-library/react';
import React from 'react';
import ProductList, { ProductListProps } from './product-list';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList />);
    expect(baseElement).toBeTruthy();
  });
});

describe('ProductList Component', () => {
  
  it('displays the welcome message', () => {
    const props: ProductListProps = {};
    const { getByText } = render(<ProductList {...props} />);
    expect(getByText('Welcome to ProductList!')).toBeTruthy();
  });

  it('displays the secondary message', () => {
    const props: ProductListProps = {};
    const { getByText } = render(<ProductList {...props} />);
    expect(getByText('Good')).toBeTruthy();
  });

  // You can add more test cases as needed for specific functionality or edge cases
});
