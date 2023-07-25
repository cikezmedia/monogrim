import React from 'react';
import styles from '@/components/card/card.module.css';
import Image from 'next/image';

const Card = (param) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={param.img}
          alt='product'
          fill={true}
          className={styles.img}
        />
      </div>
      <div className={styles.cardBody}>
        <h1>{param.title}</h1>
        <span className={styles.amount}>${param.amount}</span>
      </div>
      <p>{param.desc}</p>
    </div>
  );
};

export default Card;
