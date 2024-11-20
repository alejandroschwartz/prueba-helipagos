import { render, screen, waitFor } from '@testing-library/react';
import StarshipDetailPage from '@/app/starship/page';
import '@testing-library/jest-dom';

describe('Starship List Page', () => {

  it('renders the heading "Lista de Naves"', async () => {
    render(<StarshipDetailPage />);

    await waitFor(() => {
      const headings = screen.getAllByText(/Lista de Naves/i);
      expect(headings[0]).toBeInTheDocument();
    });
  });

});