import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick, to }) {
  return (
    <Button className={cx('btn-menu-item')} to={to} leftIcon={item.icon} noneBorder onClick={onClick}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
