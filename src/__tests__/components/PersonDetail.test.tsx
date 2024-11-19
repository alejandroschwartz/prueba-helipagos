import { render, screen, waitFor } from '@testing-library/react';
import PersonDetail from '@/components/Person/PersonDetail';
import '@testing-library/jest-dom';

describe('PersonDetail', () => {

  it('shows loading state initially', () => {
    const params = { id: '1' };
    render(<PersonDetail id={params.id} />);
    const loadingText = screen.getByText(/Cargando Persona por id.../i);
    expect(loadingText).toBeInTheDocument();
  });

  it('shows error', async () => {
    const params = { id: '1' };
    render(<PersonDetail id={params.id} />);

    await waitFor(() => {
      const loadingText = screen.getByText(/Failed to fetch person data. Error:/i);
      expect(loadingText).toBeInTheDocument();
    });
  });

});
