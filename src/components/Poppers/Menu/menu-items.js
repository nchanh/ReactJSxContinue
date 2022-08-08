import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
  return (
    <Button className={cx('btn-menu-item')} leftIcon={item.icon} noneBorder>
      {item.title}
    </Button>
  );
}

export default MenuItem;
