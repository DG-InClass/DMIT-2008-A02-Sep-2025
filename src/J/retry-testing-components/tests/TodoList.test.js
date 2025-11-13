// ~/tests/TodoList.test.js
// Checklist of what we're going to test in our <TodoList>
// component:
//  - title renders
//  - button exists
//  - todo items are added properly

import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodoList from '../components/TodoList';

test('todo list title renders correctly', () => {
    // Arrange
    // Act
    render(<TodoList />); // Will put the component in the JSDOM
    // Assert
    const titleElement = screen.getByText("Our Todo List");
    expect(titleElement).toBeInTheDocument();
});

test('todo list button renders correctly', () => {
    render(<TodoList />);
    const buttonElement = screen.getByText("Add Todo");
    expect(buttonElement).toBeInTheDocument();
});

test('todo is added successfully', () => {
    // Arrange
    render(<TodoList />);
    const inputElement = screen.getByLabelText("New Todo");
    const buttonElement = screen.getByText("Add Todo");
    const listElement = screen.getByTestId("todo-item-list");
    const EXPECTED_STRING = "Learn Testing in JavaScript";
    // let's add the string to our input element
    fireEvent.change(inputElement, {
        target: { value: EXPECTED_STRING }
    });
    // Just do a "pre-flight" test that we were able to
    // put our text into the <input>
    expect(inputElement.value).toBe(EXPECTED_STRING);

    // Act - do the primary action/work/behaviour
    act(() => {
        buttonElement.click();
    });

    // Assert
    // a) The component should be clearing the <input>
    expect(inputElement.value).toBe('');
    // b) The actual "todo" is added into the list
    expect(listElement).toHaveTextContent(EXPECTED_STRING);
});