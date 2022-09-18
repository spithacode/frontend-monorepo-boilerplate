import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../common/test/render';

import { HomePage } from '.';

describe('apps', () => {
  describe('boilerplate-app', () => {
    describe('HomePage', () => {
      it('should render home page when no props are present', () => {
        renderWithTheme(<HomePage />);

        expect(screen.getByText('Home Page')).toBeInTheDocument();
      });
    });
  });
});
