import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
  return (
    <div className={cx('menu-item')}>
      <Button leftIcon={item.icon} noneBorder>
        {item.title}
      </Button>
    </div>
  );
}

export default MenuItem;
