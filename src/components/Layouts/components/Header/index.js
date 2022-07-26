import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faKeyboard,
  faEarthAsia,
  faCircleQuestion,
  faCoins,
  faGear,
  faChartLine,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu as PopperMenu } from '~/components/Poppers';
import Button from '~/components/Button';
import { faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          name: 'en',
          title: 'English',
        },
        {
          name: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const MENU_USER = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/get-coins',
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} />,
      title: 'View Analytics',
      to: '/analytics',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  const isLogin = true;

  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="logo-tiktok" />
        </div>
        <Search />

        <div className={cx('action')}>
          <Button leftIcon={<UploadIcon />}>Upload</Button>

          {isLogin ? (
            <>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('btn-menu-plane')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('btn-menu-message')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary to="/login">
                Log in
              </Button>
            </>
          )}

          <PopperMenu items={isLogin ? MENU_USER : MENU_ITEMS} onChange={handleChangeMenu}>
            {isLogin ? (
              <Image
                className={cx('menu-avatar')}
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/288032640_1155481101685299_8138409178133466525_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4BWhwPvVGbgAX8xeHU5&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9TG72yCSCap7Py5_D3I8_4bAIOhU_JyPaiWiQCkfNF7w&oe=62F8194C"
                alt="avt"
              />
            ) : (
              <button className={cx('btn-menu')}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
