import React from 'react';
import styles from './CoverImage.module.css';

const CoverImage = ({ username }) => {
  return (
    <div className={styles.imageCover}>
      <img
        className={styles.coverImage}
        src={
          process.env.REACT_APP_AVATAR_URL +
          `${username}.svg?options[mood][]=happy`
        }
        alt="avatar"
      />
    </div>
  );
};

export default CoverImage;
