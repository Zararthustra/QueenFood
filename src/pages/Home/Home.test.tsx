import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Home } from './Home';

import { Food, Formules, Intolerances, Khayat } from '@pages/index';

describe('Page Home', () => {
  const setup = () => {
    const queryClient = new QueryClient();
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aliments" element={<Food />} />
            <Route path="/fiches" element={<Khayat />} />
            <Route path="/formules" element={<Formules />} />
            <Route path="/intolerances" element={<Intolerances />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const main = screen.queryByTestId('home');

    const formulesLink = screen.getByRole('link', {
      name: 'Formules et indices'
    });
    const alimentsLink = screen.getByRole('link', {
      name: 'Informations alimentaires'
    });
    const intolerancesLink = screen.getByRole('link', {
      name: 'Liste des intolérances'
    });
    const khayatLink = screen.getByRole('link', {
      name: 'Fiches du Pr Khayat'
    });

    return {
      main,
      khayatLink,
      formulesLink,
      alimentsLink,
      intolerancesLink,
      ...utils
    };
  };

  test('Is present in DOM', () => {
    const { main } = setup();
    expect(main).toBeInTheDocument();
  });

  test('Link Formules', () => {
    const { formulesLink, queryByTestId } = setup();
    fireEvent.click(formulesLink);
    const formulesPage = queryByTestId('formules');
    expect(formulesPage).toBeInTheDocument();
  });

  test('Link Intolérances', () => {
    const { intolerancesLink, queryByTestId } = setup();
    fireEvent.click(intolerancesLink);
    const intolerancesPage = queryByTestId('intolerances');
    expect(intolerancesPage).toBeInTheDocument();
  });

  test('Link Aliments', () => {
    const { alimentsLink, queryByTestId } = setup();
    fireEvent.click(alimentsLink);
    const foodPage = queryByTestId('aliments');
    expect(foodPage).toBeInTheDocument();
  });

  test('Link Khayat', () => {
    const { khayatLink, queryByTestId } = setup();
    fireEvent.click(khayatLink);
    const khayatPage = queryByTestId('khayat');
    expect(khayatPage).toBeInTheDocument();
  });
});
