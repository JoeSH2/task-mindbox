import { FC, InputHTMLAttributes, memo } from 'react';

import { cls, ModeClassName } from '../../lib/cls.ts';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearStyle?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    value,
    onChange,
    className,
    clearStyle,
    placeholder = 'type...',
    disabled,
    type,
    required,
  } = props;

  const mode: ModeClassName = {
    [style.disabled]: disabled,
    [style.clear]: clearStyle,
  };

  return (
    <input
      required={required}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      className={cls(style.Input, mode, [className])}
      placeholder={placeholder}
    />
  );
});
