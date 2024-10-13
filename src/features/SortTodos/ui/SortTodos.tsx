import { FC, useContext, useEffect, useState } from 'react';
import { TodosContext } from 'src/app/context/TodosContext';
import { cls } from 'src/shared/lib/cls';
import { Button } from 'src/shared/ui/Button/Button';
import style from './SortTodos.module.scss';

export enum SortFlag {
  ALL = 'Все',
  ACTIVE = 'Активные',
  COMPLETED = 'Выполненные',
}

export const SortTodos: FC = () => {
  const { todos, setFilteredTodos } = useContext(TodosContext);
  const [activeFlag, setActiveFlag] = useState(SortFlag.ALL);

  const onSortingTodos = (sortFlag?: SortFlag) => {
    switch (sortFlag) {
      case SortFlag.ALL:
        setActiveFlag(SortFlag.ALL);
        setFilteredTodos(todos);
        break;
      case SortFlag.ACTIVE:
        setActiveFlag(SortFlag.ACTIVE);
        setFilteredTodos(todos.filter((todo) => !todo.status));
        break;
      case SortFlag.COMPLETED:
        setActiveFlag(SortFlag.COMPLETED);
        setFilteredTodos(todos.filter((todo) => todo.status));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setFilteredTodos(todos);
    onSortingTodos(activeFlag);
  }, [todos]);

  return (
    <article className={style.sorting}>
      {Object.values(SortFlag).map((flag, i) => (
        <Button
          data-testid={flag}
          key={`${flag}_${i}`}
          onClick={() => onSortingTodos(flag)}
          className={cls(
            style.toggleBtn,
            { [style.activeBtn]: flag === activeFlag },
            []
          )}
        >
          {flag}
        </Button>
      ))}
    </article>
  );
};
