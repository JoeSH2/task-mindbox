import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { TodosContext } from 'src/app/context/TodosContext';
import { Todo } from 'src/entities/TodoCard/types/Todo.types';
import { TodoList } from './TodoList';

describe('TodoList component', () => {
  const mockTodos: Todo[] = [
    {
      id: 1,
      status: false,
      name: 'Первая Todo',
    },
    {
      id: 2,
      status: true,
      name: 'Вторая Todo',
    },
    {
      id: 3,
      status: false,
      name: 'Третья Todo',
    },
  ];
  const mockSetTodos = jest.fn();
  const mockContextValue = {
    todos: mockTodos,
    filteredTodos: mockTodos,
    setTodos: mockSetTodos,
  };

  test('удаление задачи', () => {
    render(
      <TodosContext.Provider value={mockContextValue}>
        <TodoList />
      </TodosContext.Provider>
    );

    const removeBtns = screen.getAllByTestId('TodoCard-removeBtn');
    expect(removeBtns).toHaveLength(3);

    const todoCards = screen.getAllByTestId('TodoCard-card');
    const secondCards = todoCards[0];
    const removeButton = within(secondCards).getByTestId('TodoCard-removeBtn');
    fireEvent.click(removeButton);
    expect(mockSetTodos).toHaveBeenCalledWith([
      {
        id: 2,
        status: true,
        name: 'Вторая Todo',
      },
      {
        id: 3,
        status: false,
        name: 'Третья Todo',
      },
    ]);
  });
});
