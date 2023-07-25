import React from 'react';
import styles from '@/components/cards/cardsx3.module.css';
import Card from '../card/Card';

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card
        title='MONOGRAM CARRYING CASE'
        img='/20221018_MonogramCC_Case_06_1920x1280_crop_center.jpg.webp'
        amount='47'
      />
      <Card
        title='MONOGRAM CORE'
        img='/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_1920x1280_crop_center.jpg.webp'
        amount='127'
      />
      <Card
        title='SLIDER MODULE'
        img='/Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a_1920x1280_crop_center.jpg.webp'
        amount='476'
      />
      <Card
        title='ESSENTIAL KEYS MODULE'
        img='/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_1920x1280_crop_center.jpg.webp'
        amount='714'
      />
      <Card
        title='ORBITER MODULE'
        img='/Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c_1920x1280_crop_center.jpg.webp'
        amount='714'
      />
      <Card
        title='DIAL MODULE'
        img='/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_1920x1280_crop_center.jpg.webp'
        amount='714'
      />
      <Card
        title='CONSOLE PACK: AUDIO'
        img='/SW-box-render-mini-midi-final-august_1920x1382_crop_center.jpg.webp'
        amount='714'
      />
      <Card
        title='CONSOLE PACK: PHOTO'
        img='/SW-box-render-mini-photo-final-august_1920x1382_crop_center.jpg.webp'
        amount='714'
      />
      <Card
        title='CONSOLE PACK: VIDEO'
        img='/SW-box-render-mini-video-final-august_1920x1382_crop_center.jpg.webp'
        amount='714'
      />
    </div>
  );
};

export default Cards;
