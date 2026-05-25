import { render } from '@testing-library/react';

import JoyoUi from './ui';

describe('JoyoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JoyoUi />);
    expect(baseElement).toBeTruthy();
  });
});
