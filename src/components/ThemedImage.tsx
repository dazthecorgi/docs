import React from 'react';
import clsx from 'clsx';
import styles from './ThemedImage.module.css';

interface ThemedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ThemedImage({ src, alt, className }: ThemedImageProps): JSX.Element {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={clsx(styles.image, className)} />
    </div>
  );
} 