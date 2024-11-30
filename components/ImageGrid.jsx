"use client"

import React, { useState } from 'react';
import styles from './ImageGrid.module.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  // Function to fetch the data
  const loadImages = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  // Call the function immediately
  if (images.length === 0) {
    loadImages();
  }

  return (
    <div className={styles.gridContainer}>
      {images.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <Link href={item.Name} style={{textDecoration: 'none'}}>
            <img src={item.Image} alt={item.Name} />
            <p className={inter.className}>{item.Name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
