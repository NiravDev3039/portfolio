import React from 'react';
import Image from 'next/image';
import { FaEye, FaCode } from 'react-icons/fa'; // Import icons from react-icons
import myImage from '../../Images/b.jpg'; // Adjust the path if necessary
import Currency from '../../Images/js1.png'; // Adjust the path if necessary
import RBACCURD from '../../Images/RBAC.png'; // Adjust the path if necessary
import Age from '../../Images/age.png'; // Adjust the path if necessary

import Link from 'next/link'; // Import Link from next/link
import styles from '../../css/Projectroom.module.css';

const cards = [
  {
    image: Currency,
    heading: 'Card Heading 1',
    text: 'A Currency Converter is a tool or application that allows users to convert the value of one currency into another.',
    button1Text: 'View',
    button2Text: 'Code',
    link1: 'https://github.com/NiravDev3039/Currency',  // Link for the "View" button
    link2: 'https://currency-navy.vercel.app/?vercelToolbarCode=IPl3YobRMZj99Zf'  // Link for the "Code" button
  },
  {
    image: RBACCURD,
    heading: 'Card Heading 2',
    text: ' Role-Based Access Control (RBAC) Dashboard typically allows administrators to manage user roles, permissions.',
    button1Text: 'View',
    button2Text: 'Code',
    link1: 'https://github.com/NiravDev3039/RBAC-UI-Dashboard',
    link2: 'https://rbac-ui-dashboard-g5e4gfocu-niravdev3039s-projects.vercel.app/?vercelToolbarCode=RKIHWHDD8tlgpMp'
  },
  {
    image: Age,
    heading: 'Card Heading 3',
    text: 'simple age calculator.This allows users to input their birthdate and calculates their age based on the current date.',
    button1Text: 'View',
    button2Text: 'Code',
    link1: 'https://github.com/NiravDev3039/Age-Calculator',
    link2: 'https://currency-navy.vercel.app/?vercelToolbarCode=IPl3YobRMZj99Zf'
  }
];

const Page = () => {
  return (
    <div className={styles.container}>
      <span>
        <span className={styles.WorkTitle}>
          WORKROOM
        </span>
      </span>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <Image src={card.image} alt={`Card Image ${index + 1}`} className={styles.cardImage} />
            <h3 className={styles.cardHeading}>{card.heading}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <div className={styles.buttonContainer}>
              <button
                className={styles.cardButton}
                onClick={() => window.open(card.link1, '_blank')} // Open link1 in a new tab
              >
                <FaEye className={styles.icon} /> {card.button1Text}
              </button>
              <button
                className={styles.cardButton}
                onClick={() => window.open(card.link2, '_blank')} // Open link2 in a new tab
              >
                <FaCode className={styles.icon} /> {card.button2Text}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.addButtonContainer}>
        <Link href="/components/allwork"> {/* Link to the Allwork page */}
          <button className={styles.addButton}>All Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
