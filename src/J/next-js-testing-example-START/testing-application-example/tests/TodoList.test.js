// ./tests/TodoList.test.js

// These functions are "test helpers" for working with React
import { fireEvent, render, screen, act } from '@testing-library/react';
// This module sets up additional helpers for the JSDom environment
import '@testing-library/jest-dom';


// Import the component we want to test
import TodoList from '../components/TodoList';

// Now, we can write our tests.
// (note: the jest.config.js settings are making the
//  test() and expect() functions globally available.)

test('todo list title renders correctly', () => {
    // Arrange
    render(<TodoList />);

    // Act
    const titleElement = screen.getByText('Our Todo List');

    // Assert
    expect(titleElement).toBeInTheDocument();
});

test('todo item is added successfully', () => {
    // Arrange - setup all the things needed for the test
    render(<TodoList />);
    const inputElement = screen.getByLabelText('New Todo');
    const buttonElement = screen.getByText('Add Todo');
    const listElement = screen.getByTestId('todo-item-list');
    const EXPECTED_STRING = 'Learn Testing in JavaScript';

    // let's put the text in our input element
    // fireEvent.change simulates the user's action of
    // changing the text of the input element
    fireEvent.change(inputElement, {
        target: { value: EXPECTED_STRING }
    });
    // let's just do a quick "sanity-chck" expectation on this pre-condition
    expect(inputElement.value).toBe(EXPECTED_STRING);

    // Act - do the thing that we are testing
    act(() => {
        buttonElement.click();
    });

    // Assert - see if it worked as expected
    expect(inputElement.value).toBe('');
    expect(listElement).toHaveTextContent(EXPECTED_STRING);
});
