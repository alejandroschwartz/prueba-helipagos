import { render, screen } from '@testing-library/react';
import StarshipDetailPage from '@/app/starship/[id]/page';
import '@testing-library/jest-dom';

describe('Starship Detail Page', () => {

  it('shows loading state initially', () => {
    const params = { id: '1' };
    render(<StarshipDetailPage params={params} />);
    const loadingText = screen.getByText(/Starship id:/i);
    expect(loadingText).toBeInTheDocument();
  });

});
