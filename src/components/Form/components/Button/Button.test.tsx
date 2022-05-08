import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('Button', () => {
  it('render component', () => {
    render(<Button disabled={false} name="Send" />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button disabled={false} name="Send" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button disabled={false} name="Send" />);
    expect(screen.getByText(/Send/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button disabled={false} name="Send" />
        <Button disabled={false} name="Send" />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button disabled name="click" />);

    expect(screen.getByText('click')).toBeDisabled();
  });

  it('button have style background red', () => {
    render(<Button disabled={false} name="Send" />);

    expect(screen.getByText('Send')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();

    render(<Button onButtonClick={mockHandler} disabled={false} name="Send" />);
    await userEvent.click(screen.getByText(/Send/));
    expect(mockHandler).toBeCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();

    render(
      <Button
        onButtonClick={() => setTimeout(mockHandler, 1000)}
        disabled={false}
        name="Send"
      />
    );

    await userEvent.click(screen.getByText(/Send/));

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  });
});
