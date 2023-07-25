import styles from './page.module.css';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';
import Cards from '@/components/cards/Cards';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1 className={styles.title}>A CONSOLE FOR EVERY WORKFLOW</h1>
          <p className={styles.desc}>Discover the perfect console for yours.</p>
        </div>
        <Link href='/' className={styles.arrow}>
          <SlArrowDown size={36} />
        </Link>
      </div>
      <Cards />
    </div>
  );
}
