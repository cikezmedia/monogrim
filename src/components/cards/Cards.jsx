import React from 'react';
import styles from '@/components/cards/cards.module.css';
import Card from '../card/Card';

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card
        title='MINI CONSOLE'
        desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        img='/Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg.webp'
        amount='198'
      />
      <Card
        title='AUDIO CONSOLE'
        desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        img='/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1920x1280_crop_center.jpg.webp'
        amount='397'
      />
      <Card
        title='PHOTO CONSOLE'
        desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        img='/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1920x1280_crop_center.jpg.webp'
        amount='476'
      />
      <Card
        title='VIDEO CONSOLE'
        desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        img='/Packaging_MasterClosedBracket1_Monogram_May20204494_1920x1280_crop_center.jpg.webp'
        amount='714'
      />
    </div>
  );
};

export default Cards;
