import { render, screen, waitFor } from '@testing-library/react';
import PersonDetailPage from '@/app/person/page';
import '@testing-library/jest-dom';

describe('Person List Page', () => {

  it('renders the heading "Lista de Personas"', async () => {
    render(<PersonDetailPage />);

    await waitFor(() => {
      const headings = screen.getAllByText(/Lista de Personas/i);
      expect(headings[0]).toBeInTheDocument();
    });
  });

});