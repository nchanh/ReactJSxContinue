import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  children,
  onClick,
  primary = false,
  outline = false,
  round = false,
  noneBorder = false,
  small = false,
  medium = false,
  large = false,
  underline = false,
  disabled = false,
  leftIcon,
  rightIcon,
  classCustom = '',
  to,
  href,
  ...passProps
}) {
  let Component = 'button';
  const classes = cx('wrapper', {
    [classCustom]: classCustom,
    primary,
    outline,
    round,
    noneBorder,
    small,
    medium,
    large,
    underline,
    disabled,
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props.key === 'function') {
        delete props.key;
      }
    });
  }

  if (to) {
    Component = Link;
    props.to = to;
  } else if (href) {
    Component = 'a';
    props.href = href;
  }

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon-button')}>{leftIcon}</span>}
      <span className={cx('text-button')}>{children}</span>
      {rightIcon && <span className={cx('icon-button')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
