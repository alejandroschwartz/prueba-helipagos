import { render, screen, waitFor } from '@testing-library/react';
import PlanetDetailPage from '@/app/planet/page';
import '@testing-library/jest-dom';

describe('Planet List Page', () => {

  it('renders the heading "Lista de Planetas"', async () => {
    render(<PlanetDetailPage />);

    await waitFor(() => {
      const headings = screen.getAllByText(/Lista de Planetas/i);
      expect(headings[0]).toBeInTheDocument();
    });
  });

});