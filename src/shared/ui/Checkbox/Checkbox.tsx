import { FC, memo } from 'react';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = memo((props) => {
  const { onChange, checked } = props;
  return (
    <input
      className={style.checkbox}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
});
