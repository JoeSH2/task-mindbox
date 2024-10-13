import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodosContext } from 'src/app/context/TodosContext';
import { Todo } from 'src/entities/TodoCard/types/Todo.types';
import { AddTodo } from './AddTodo';

describe('AddTodo component', () => {
  const mockTodos: Todo[] = [];
  const mockSetTodos = jest.fn();

  const mockContextValue = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  test('добавляем TODO в todoList', () => {
    render(
      <TodosContext.Provider value={mockContextValue}>
        <AddTodo />
      </TodosContext.Provider>
    );

    const input = screen.getByPlaceholderText('Название задачи...');
    const button = screen.getByText('добавить');

    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.click(button);

    expect(mockSetTodos).toHaveBeenCalledWith([
      {
        id: expect.any(Number),
        status: false,
        name: 'Новая задача',
      },
    ]);

    expect(input).toHaveValue('');
  });

  test('ошибка добавления', () => {
    render(
      <TodosContext.Provider value={mockContextValue}>
        <AddTodo />
      </TodosContext.Provider>
    );

    const button = screen.getByText('добавить');
    fireEvent.click(button);

    expect(mockSetTodos).not.toHaveBeenCalled();
  });
});
