import React from 'react';
import { render } from '@testing-library/react';
import Fighter from './Fighter';
import { MemoryRouter } from 'react-router-dom';

describe('Villager component', () => {
  it('renders Villager', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Fighter
          name="Bali"
          birthplace="Egypt"
          style="kendo"
          image="https://image.com/image.jpeg"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
