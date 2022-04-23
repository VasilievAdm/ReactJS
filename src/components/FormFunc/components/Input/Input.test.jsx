import React from 'react';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with placeholder', () => {
    render(<Input />);
    expect(screen.getByPlaceholderText(/Enter text/)).toBeInTheDocument();
  });

  it('render component without error', () => {
    render(<Input />);
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Input />
        <Input />
      </>
    );

    expect(screen.queryAllByRole('textbox').length).toBe(2);
  });

  it('render component with text', () => {
    render(<Input value="some text" />);
    expect(screen.getByRole('textbox')).toHaveValue('some text');
  });
});
