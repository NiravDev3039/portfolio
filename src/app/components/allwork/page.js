"use client";
import React, { useState } from "react";
import Image from "next/image";
import Allworknavbar from "../../components/allworknavbar/page";
import Footer from "../../components/allworkfooter/page";
import styles from "../../css/Allwork.module.css";
import myImage from "../../Images/b.jpg"; // Importing the image
import Currency from "../../Images/js1.png"; // Adjust the path if necessary
import RBACCURD from "../../Images/RBAC.png"; // Adjust the path if necessary
import Age from "../../Images/age.png"; // Adjust the path if necessary
import Travel from "../../Images/travel.png"; // Adjust the path if necessary
import Resize from "../../Images/resize.png"; // Adjust the path if necessary
import Photo from "../../Images/photo.png"; // Adjust the path if necessary

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    const javascriptCards = (
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src={Age}
            alt="JavaScript Card 1"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>Age Calculator</h3>
            <p>
              A simple age calculator. This allows users to input their birthdate
              and calculates their age based on the current date.
            </p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/Age-Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://currency-navy.vercel.app/?vercelToolbarCode=IPl3YobRMZj99Zf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={Currency}
            alt="JavaScript Card 2"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>Currency Converter</h3>
            <p>
              A Currency Converter is a tool that allows users to convert the
              value of one currency into another.
            </p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/Currency"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://currency-navy.vercel.app/?vercelToolbarCode=IPl3YobRMZj99Zf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={Resize}
            alt="JavaScript Card 3"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>Image Resizer</h3>
            <p>Resizing an image using JavaScript.</p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/Resize-image-javascript"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://resize-image-javascript.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    const reactCards = (
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src={RBACCURD}
            alt="React Card 1"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>RBAC</h3>
            <p>
              Role-Based Access Control (RBAC) Dashboard typically allows
              administrators to manage user roles and permissions.
            </p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/RBAC-UI-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://rbac-ui-dashboard-g5e4gfocu-niravdev3039s-projects.vercel.app/?vercelToolbarCode=RKIHWHDD8tlgpMp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={Photo}
            alt="React Card 2"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>Photography</h3>
            <p>
              A login page with a single-page website using Firebase
              Authentication.
            </p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/photography"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://photography-five-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={Travel}
            alt="React Card 3"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <div className={styles.cardContent}>
            <h3>Travel</h3>
            <p>
              A Traveling Website using React allows users to explore
              destinations, book trips, and view travel-related information
              dynamically.
            </p>
            <div className={styles.cardButtons}>
              <a
                href="https://github.com/NiravDev3039/Traveling-web"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                Code
              </a>
              <a
                href="https://traveling-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    if (activeTab === "all") {
      return (
        <>
          {javascriptCards}
          <div className={styles.separator}></div>
          {reactCards}
        </>
      );
    }

    if (activeTab === "javascript") {
      return javascriptCards;
    }

    if (activeTab === "react") {
      return reactCards;
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <Allworknavbar />
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "javascript" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("javascript")}
        >
          JavaScript
        </div>
        <div
          className={`${styles.tab} ${activeTab === "react" ? styles.active : ""}`}
          onClick={() => setActiveTab("react")}
        >
          React
        </div>
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default Page;
