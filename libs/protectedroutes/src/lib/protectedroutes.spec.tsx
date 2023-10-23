import { render } from '@testing-library/react';

import Protectedroutes from './protectedroutes';

describe('Protectedroutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Protectedroutes />);
    expect(baseElement).toBeTruthy();
  });
});
