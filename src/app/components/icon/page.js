// page.js

import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from '../../css/Icon.module.css'; // Import your CSS module
import github from '../../Images/github.png';
import linkedin from '../../Images/linkedin.png';
import instagram from '../../Images/instagram.png';
import whatsapp from '../../Images/whatsapp.png';

const Page = () => {
  return (
    <div className={styles.container}>
      {/* GitHub Icon */}
      <div className={styles.icon}>
        <a href="https://github.com/NiravDev3039" target="_blank" rel="noopener noreferrer">
          <Image src={github} alt="GitHub" width={50} height={50} />
        </a>
      </div>
      
      {/* LinkedIn Icon */}
      <div className={styles.icon}>
        <a href="https://www.linkedin.com/in/nirav-patel-22888212a/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="LinkedIn" width={50} height={50} />
        </a>
      </div>
      
      {/* Instagram Icon */}
      <div className={styles.icon}>
        <a href="https://www.instagram.com/itz__nirav__" target="_blank" rel="noopener noreferrer">
          <Image src={instagram} alt="Instagram" width={50} height={50} />
        </a>
      </div>
      
      {/* WhatsApp Icon */}
      <div className={styles.icon}>
        <a href="https://wa.me/9638931895" target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp} alt="WhatsApp" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};

export default Page;
