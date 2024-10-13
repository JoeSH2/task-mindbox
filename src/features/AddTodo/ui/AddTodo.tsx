import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { TodosContext } from 'src/app/context/TodosContext';
import { Todo } from 'src/entities/TodoCard/types/Todo.types';
import { Button } from 'src/shared/ui/Button/Button';
import { Input } from 'src/shared/ui/Input/Input';
import style from './AddTodo.module.scss';

export const AddTodo: FC = () => {
  const [todoName, setTodoName] = useState('');
  const { todos, setTodos } = useContext(TodosContext);

  const handleChangeTodoName = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoName.length > 0) {
      const todo: Todo = {
        id: Date.now(),
        status: false,
        name: todoName,
      };
      setTodos([...todos, todo]);
      setTodoName('');
    }
  };

  return (
    <form onSubmit={addTodo} className={style.form}>
      <Input
        required
        value={todoName}
        onChange={(e) => handleChangeTodoName(e)}
        placeholder="Название задачи..."
        className={style.todoName}
      />
      <Button className={style.submitBtn} type="submit">
        добавить
      </Button>
    </form>
  );
};
