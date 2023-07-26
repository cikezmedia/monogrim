import React from 'react';
import styles from '@/components/footer/footer.module.css';
import Link from 'next/link';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h4>MONOGRAM</h4>
          </div>
          <div className={styles.cardBody}>
            305 King St. W. Suite 502 Kitchener, ON Canada
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h4>QUICK LINKS</h4>
          </div>
          <div className={styles.cardBody}>
            <Link href='/' alt='Link' className={styles.link}>
              Home
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              How it Works
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Shop
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Download
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h4>HELP</h4>
          </div>
          <div className={styles.cardBody}>
            <Link href='/' alt='Link' className={styles.link}>
              FAQs
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Support Centre
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Shipping and Sales
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h4>INFORMATION</h4>
          </div>
          <div className={styles.cardBody}>
            <Link href='/' alt='Link' className={styles.link}>
              About Us
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Work with us
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Privacy Policy
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Terms of Use
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Terms of Sale
            </Link>
            <Link href='/' alt='Link' className={styles.link}>
              Press Kit
            </Link>
          </div>
        </div>
        <div className={`${styles.card} ${styles.grid_span_2}`}>
          <div className={styles.cardTitle}>
            <h4>SUBSCRIBE TO MONOGRAM</h4>
          </div>
          <div className={`${styles.cardBody}`}>
            Master productivity with Creative Console and get all the latest
            Monogram news.
          </div>
          <form className={styles.form}>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              className={styles.input}
            />
            <button type='submit' name='submit' className={styles.button}>
              SUBMIT
            </button>
          </form>
          <div className={styles.social}>
            <span className={styles.icon}>
              <BiLogoInstagram size={20} />
            </span>
            <span className={styles.icon}>
              <BiLogoTwitter size={20} />
            </span>
            <span className={styles.icon}>
              <BiLogoFacebook size={20} />
            </span>
            <span className={styles.icon}>
              <BiLogoYoutube size={20} />
            </span>
          </div>
          <div className={styles.copyright}>&copy; Monogrim 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
