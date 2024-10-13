import { FC, useCallback, useContext } from 'react';
import { TodosContext } from 'src/app/context/TodosContext';
import { TodoCard } from 'src/entities/TodoCard';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn';
import style from './TodoList.module.scss';

export const TodoList: FC = () => {
  const { todos, filteredTodos, setTodos } = useContext(TodosContext);

  const onChangeTodoStatus = useCallback(
    (id: number) => {
      const filtered = todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      );
      setTodos(filtered);
    },
    [todos, setTodos]
  );

  const onRemoveTodo = useCallback(
    (id: number) => {
      const filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    },
    [todos, setTodos]
  );

  if (filteredTodos.length < 1) {
    return (
      <FlexColumn
        alignItems="center"
        justifyContent="center"
        className={style.cardList}
      >
        <h2 className={style.empty}>Нет задач</h2>
      </FlexColumn>
    );
  }

  return (
    <FlexColumn className={style.cardList}>
      {filteredTodos.map((todo) => (
        <TodoCard
          key={todo.id}
          onChangeTodoStatus={onChangeTodoStatus}
          onRemoveTodo={onRemoveTodo}
          todo={todo}
        />
      ))}
    </FlexColumn>
  );
};
