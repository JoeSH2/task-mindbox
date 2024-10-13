import { FC } from 'react';
import { AddTodo } from 'src/features/AddTodo';
import { SortTodos } from 'src/features/SortTodos';
import { TodoList } from 'src/features/TodoList';
import style from './Todo.module.scss';

export const Todo: FC = () => {
  return (
    <section className={style.Todo}>
      <h1>Todos</h1>
      <AddTodo />
      <TodoList />
      <SortTodos />
    </section>
  );
};
