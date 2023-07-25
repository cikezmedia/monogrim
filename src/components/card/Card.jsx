import React from 'react';
import styles from '@/components/card/card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = (param) => {
  return (
    <Link href='/' className={styles.container}>
      <div className={styles.card}>
        <Image
          src={param.img}
          alt='product'
          fill={true}
          className={styles.img}
        />
        <div className={styles.preorder}>PRE-ORDER</div>
      </div>
      <div className={styles.cardBody}>
        <h1 className={styles.title}>{param.title}</h1>
        <div className={styles.amount}>${param.amount}</div>
      </div>
      <p>{param.desc}</p>
    </Link>
  );
};

export default Card;
