import React from 'react';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input value="" change={() => void {}} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Input value="" change={() => void {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with placeholder', () => {
    render(<Input value="" change={() => void {}} />);
    expect(screen.getByPlaceholderText(/Enter text/)).toBeInTheDocument();
  });

  it('render component without error', () => {
    render(<Input value="" change={() => void {}} />);
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Input value="" change={() => void {}} />
        <Input value="" change={() => void {}} />
      </>
    );

    expect(screen.queryAllByRole('textbox').length).toBe(2);
  });

  it('render component with text', () => {
    render(<Input value="some text" change={() => void {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('some text');
  });
});
