import { createContext, FC, ReactNode, SetStateAction, useState } from 'react';
import { Todo } from 'src/entities/TodoCard/types/Todo.types';

const todosArray: Array<Todo> = [
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

interface ThemeContextProps {
  todos: Todo[];
  setTodos: (todo: SetStateAction<Todo[]>) => void;
  filteredTodos: Todo[];
  setFilteredTodos: (todo: SetStateAction<Todo[]>) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext<ThemeContextProps>({});

export const TodosProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(todosArray);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, filteredTodos, setFilteredTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
};
