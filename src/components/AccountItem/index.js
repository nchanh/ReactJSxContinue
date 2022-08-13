import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/288032640_1155481101685299_8138409178133466525_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=stFZi213zgoAX8v9Yrp&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-wHoxseHPmPCXoA-Ei9iB8SV2dLbLb4i1dLJuUDYCXFQ&oe=62F424CC"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Chanh</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('iconCheck')} />
        </p>
        <span className={cx('username')}>nchanh</span>
      </div>
    </div>
  );
}

export default AccountItem;
