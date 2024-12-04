import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Button from './Component/Button';

describe("Counter Component", () => {
  it("increments the count", () => {
    render(<Button />);
    
    // Check initial counter value
    const counter = screen.getByText(/Counter/);
    expect(counter).toHaveTextContent('Counter : 0');

    // Find and click the increment button
    const incrementButton = screen.getByText(/Increment Button/);
    fireEvent.click(incrementButton);

    // Assert that the counter text updated
    expect(counter).toHaveTextContent('Counter : 1');
  });

  it("decrements the count", () => {
    render(<Button />);
    
    // Check initial counter value
    const counter = screen.getByText(/Counter/);
    expect(counter).toHaveTextContent('Counter : 0');

    // Find and click the decrement button
    const decrementButton = screen.getByText(/Decrement Button/);
    fireEvent.click(decrementButton);

    // Assert that the counter text updated
    expect(counter).toHaveTextContent('Counter : -1');
  });
});
