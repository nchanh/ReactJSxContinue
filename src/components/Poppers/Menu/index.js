import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Poppers';
import MenuItem from './menu-items';
import Header from './header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ children, items = [], onChange = defaultFunc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, i) => {
      return <MenuItem key={i} item={item} to={item.to} onClick={() => handleClickMenu(item)} />;
    });
  };

  const handleClickMenu = (item) => {
    const isParent = !!item.children;
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else {
      onChange(item);
    }
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-items')}>
            {history.length > 1 && <Header title="Language" onBack={handleBackMenu} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHidden={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
