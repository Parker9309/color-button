import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App', () => {
  it('button has the correct initial color and text', () => {
    render(<App />);
    const button = screen.getByRole('button', {name: 'Change to blue'});
    expect(button).toHaveStyle('background-color: red');

    // now i want to change the color to blue, and see what happens    
    
    userEvent.click(button);
    expect(button).toHaveStyle('background-color: blue');
    expect(button).toHaveTextContent('Change to red')
  });
  it('button changes color and text when clicked', () => {

    });
});