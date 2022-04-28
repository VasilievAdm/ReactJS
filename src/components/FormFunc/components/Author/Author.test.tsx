import React from 'react';
import { Author } from './Author';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Author', () => {
  it('render component', () => {
    render(<Author value="" change={() => void {}} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Author value="" change={() => void {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with placeholder', () => {
    render(<Author value="" change={() => void {}} />);
    expect(screen.getByPlaceholderText(/Who are you?/)).toBeInTheDocument();
  });

  it('render component without error', () => {
    render(<Author value="" change={() => void {}} />);
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Author value="" change={() => void {}} />
        <Author value="" change={() => void {}} />
      </>
    );

    expect(screen.queryAllByRole('textbox').length).toBe(2);
  });

  it('render component with text', () => {
    render(<Author value="user" change={() => void {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('user');
  });
});
