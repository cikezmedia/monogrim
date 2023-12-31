import styles from './page.module.css';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';
import CardsX2 from '@/components/cards/CardsX2';
import CardsX3 from '@/components/cards/CardsX3';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1 className={styles.title}>A CONSOLE FOR EVERY WORKFLOW</h1>
          <p className={styles.desc}>Discover the perfect console for yours.</p>
        </div>
        <Link href='./#card' className={styles.arrow}>
          <SlArrowDown size={36} />
        </Link>
      </div>
      <CardsX2 />
      <div className={styles.banner}>
        <Image
          src='/shop-banner-module.webp'
          className={styles.img}
          fill={true}
          alt='Console'
        />
        <div className={styles.bannerText}>
          <h1 className={styles.title}>CREATE YOUR OWN CONSOLE</h1>
          <div className={styles.bannerBody}>Add-on to make it perfect.</div>
        </div>
      </div>
      <CardsX3 />
    </div>
  );
}
