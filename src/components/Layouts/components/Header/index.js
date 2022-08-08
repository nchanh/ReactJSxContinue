import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faQuestionCircle,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper, Menu as PopperMenu } from '~/components/Poppers';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  { title: 'English', icon: <FontAwesomeIcon icon={faLanguage} /> },
  { title: 'Feedback and help', icon: <FontAwesomeIcon icon={faQuestionCircle} /> },
  { title: 'Keyboard shortcuts', icon: <FontAwesomeIcon icon={faKeyboard} /> },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult([1, 2, 3, 4]);

    return () => {};
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo-tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h5 className={cx('search-result-title')}>Account</h5>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos..." spellCheck={false} />
            <button className={cx('btn-clear')}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('spinner')} />
            <button className={cx('btn-search')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
          <Button primary to="/login">
            Log in
          </Button>

          <PopperMenu items={MENU_ITEMS}>
            <button className={cx('btn-menu')}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
