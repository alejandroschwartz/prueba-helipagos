import {render, screen} from '@testing-library/react';
import HomePage from '../../app/page';

describe('HomePage', () => {

  it('renders home page', () => {
    render(<HomePage />);
    const text = screen.getByText(/Bienvenidos la aplicación de/i);
    expect(text).toBeInTheDocument();
  });

});
