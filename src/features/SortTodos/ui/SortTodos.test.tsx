import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodosContext } from 'src/app/context/TodosContext';
import { Todo } from 'src/entities/TodoCard/types/Todo.types';
import { SortFlag, SortTodos } from './SortTodos';

describe('SortTodos component', () => {
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
  const mockSetFilteredTodos = jest.fn();
  const mockContextValue = {
    todos: mockTodos,
    setFilteredTodos: mockSetFilteredTodos,
  };

  test('сортировка', () => {
    render(
      <TodosContext.Provider value={mockContextValue}>
        <SortTodos />
      </TodosContext.Provider>
    );

    expect(screen.getByTestId(SortFlag.ALL)).toBeInTheDocument();
    expect(screen.getByTestId(SortFlag.ACTIVE)).toBeInTheDocument();
    expect(screen.getByTestId(SortFlag.COMPLETED)).toBeInTheDocument();

    expect(mockSetFilteredTodos).toHaveBeenCalledWith(mockTodos);

    fireEvent.click(screen.getByTestId(SortFlag.ACTIVE));
    expect(mockSetFilteredTodos).toHaveBeenCalledWith([
      {
        id: 1,
        status: false,
        name: 'Первая Todo',
      },
      {
        id: 3,
        status: false,
        name: 'Третья Todo',
      },
    ]);

    fireEvent.click(screen.getByTestId(SortFlag.COMPLETED));
    expect(mockSetFilteredTodos).toHaveBeenCalledWith([
      {
        id: 2,
        status: true,
        name: 'Вторая Todo',
      },
    ]);
  });
});
