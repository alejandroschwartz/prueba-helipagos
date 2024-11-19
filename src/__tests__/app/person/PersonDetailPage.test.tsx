import { render, screen } from '@testing-library/react';
import PersonDetailPage from '@/app/person/[id]/page';
import '@testing-library/jest-dom';

describe('Person Detail Page', () => {

  it('shows loading state initially', () => {
    const params = { id: '1' };
    render(<PersonDetailPage params={params} />);
    const loadingText = screen.getByText(/Person id:/i);
    expect(loadingText).toBeInTheDocument();
  });

});
