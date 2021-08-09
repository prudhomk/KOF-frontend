/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FighterList from './FighterList';
import { MemoryRouter } from 'react-router-dom';

describe('Villager List component', () => {
  const list = [
    {
      name: 'hello',
      birthplace: 'USA',
      style: 'karate',
      image: 'whatever',
      _id: 'string'
    }
  ];
  afterEach(() => cleanup());
  it('renders Fighter List', () => {
    const { asFragment } = render(<MemoryRouter><FighterList fighters={list}/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
