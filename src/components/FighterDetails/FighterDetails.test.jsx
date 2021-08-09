/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import FighterDetails from '../FighterDetails/FighterDetails';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://guarded-falls-13158.herokuapp.com/api/v1/fighters/:id',
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            'name':'Mr. Karate',
            'japanese':'Mr.カラテ',
            'image':'/MrKarate.webp',
            'origin': 'Art of Fighting',
            'birthplace':'Japan',
            'style': 'Kyokugenryu Karate',
            'job': 'The True Master of Kyokugenryu Karate',
            'powers': 'Ki',
            'quote': 'Come on! I\'m gonna cure you of the disease called life.'
            
          }        
        )
      );
            
    }
  )
);

describe('VFighter Details', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of Fighter details', async () => {
    render(<MemoryRouter initialEntries={['/:id']}><FighterDetails /></MemoryRouter>);

    screen.getByText('Loading...');
    return waitFor(async () => {
      const ul = await screen.findByTestId('1');
      expect(ul.children.length).toEqual(18);
    });
  });
});
