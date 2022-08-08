import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import MenuItem from './menu-items';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const renderItems = () => {
    return items && items.map((item, i) => <MenuItem key={i} item={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-items')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
