import React from 'react';
import { Author } from './Author';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Author', () => {
  it('render component', () => {
    render(<Author />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Author />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with placeholder', () => {
    render(<Author />);
    expect(screen.getByPlaceholderText(/Who are you?/)).toBeInTheDocument();
  });

  it('render component without error', () => {
    render(<Author />);
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Author />
        <Author />
      </>
    );

    expect(screen.queryAllByRole('textbox').length).toBe(2);
  });

  it('render component with text', () => {
    render(<Author author="user" />);
    expect(screen.getByRole('textbox')).toHaveValue('user');
  });
});
