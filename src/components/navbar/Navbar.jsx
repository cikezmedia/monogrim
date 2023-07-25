'use client';
import React, { useState } from 'react';
import styles from '@/components/navbar/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const items = [
    { id: 1, title: 'HOME   ', url: '/' },
    { id: 2, title: 'WORK FLOW', url: '/workflow' },
    { id: 3, title: 'DOWNLOAD', url: '/download' },
    { id: 4, title: 'BLOG', url: '/blog' },
    { id: 5, title: 'SUPPORT', url: '/support' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image src='/logo-main.png' alt='Logo' width={51} height={38} />{' '}
          MONOGRIM
        </div>
        <div className={styles.mobile}>
          {!show && (
            <AiOutlineMenu
              size={28}
              className={styles.menu}
              onClick={() => setShow((prev) => !prev)}
            />
          )}

          <Link href='/' className={styles.icon}>
            <BsBag size={26} />
            <BiDollar size={18} />
          </Link>
        </div>
        <div className={styles.links}>
          {items.map((item) => (
            <Link href={item.url} key={item.id} className={styles.item}>
              {item.title}
            </Link>
          ))}
          <Link href='/' className={styles.icon}>
            <BsBag size={26} />
            USD
          </Link>
        </div>
      </div>
      {show && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileList}>
            <div className={styles.logoContainer}>
              <div className={styles.mobileLogo}>
                <Image src='/logo-main.png' alt='Logo' width={51} height={38} />{' '}
                MONOGRIM
              </div>
              <AiOutlineClose
                className={styles.menu}
                size={26}
                onClick={() => setShow((prev) => !prev)}
              />
            </div>
            <div className={styles.mobileNav}>
              {items.map((item) => (
                <Link href={item.url} key={item.id} className={styles.item}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
