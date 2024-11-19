import { render, screen, waitFor } from '@testing-library/react';
import PersonList from '@/components/Person/PersonList';
import '@testing-library/jest-dom';

jest.mock('../../service/swapiService');

describe('PersonList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state initially', () => {
    render(<PersonList />);
    const loadingText = screen.getByText(/Cargando lista de Personas.../i);
    expect(loadingText).toBeInTheDocument();
  });

  it('render a accesible search box', async () => {
    render(<PersonList />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText(/Buscar por nombre/i);
      expect(input).toBeInTheDocument()
    });
  });

});
