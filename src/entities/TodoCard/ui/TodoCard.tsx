import { FC, memo } from 'react';
import { cls } from 'src/shared/lib/cls';
import { Button } from 'src/shared/ui/Button/Button';
import { Checkbox } from 'src/shared/ui/Checkbox/Checkbox';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow';
import { Todo } from '../types/Todo.types';
import style from './TodoCard.module.scss';

interface TodoCardProps {
  todo: Todo;
  onChangeTodoStatus: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

export const TodoCard: FC<TodoCardProps> = memo(
  ({ todo, onChangeTodoStatus, onRemoveTodo }) => {
    const { id, name, status } = todo;

    const removeTodo = () => {
      onRemoveTodo(id);
    };

    const changeStatus = () => {
      onChangeTodoStatus(id);
    };

    return (
      <FlexRow
        data-testid={'TodoCard-card'}
        fullWight
        alignItems="center"
        justifyContent="space-between"
        className={style.card}
      >
        <FlexRow alignItems="center" className={style.cardInfo}>
          <Checkbox onChange={changeStatus} checked={status} />
          <h5 className={cls(style.title, { [style.active]: status }, [])}>
            {name}
          </h5>
        </FlexRow>
        <Button
          data-testid={'TodoCard-removeBtn'}
          className={style.deleteBtn}
          onClick={removeTodo}
        >
          X
        </Button>
      </FlexRow>
    );
  }
);
