import React from 'react';
import styles from '../../css/Footer.module.css';

const page = () => {
    return (
        <div>
          <footer className={styles['footer-container']} style={{   fontFamily: 'footerfonts, sans-serif', fontSize:'20px' }}>
            <div>Developed From the Beginning With&copy; {new Date().getFullYear()} Nirav Patel. All rights reserved.</div>
          </footer>
        </div>
      );
    }

export default page
