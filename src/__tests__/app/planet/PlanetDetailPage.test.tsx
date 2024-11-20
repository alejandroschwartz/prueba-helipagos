import { render, screen } from '@testing-library/react';
import PlanetDetailPage from '@/app/planet/[id]/page';
import '@testing-library/jest-dom';

describe('Planet Detail Page', () => {

  it('shows loading state initially', () => {
    const params = { id: '1' };
    render(<PlanetDetailPage params={params} />);
    const loadingText = screen.getByText(/Planet id:/i);
    expect(loadingText).toBeInTheDocument();
  });

});
