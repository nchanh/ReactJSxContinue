import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';

const Image = forwardRef(({ className, src, alt, fallback: fallbackInput = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleImageError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleImageError}
    />
  );
});

export default Image;
