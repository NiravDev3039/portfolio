"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import About from "../about/page";
import Tooling from "../tooling/page";
import Quote from "../quote/page";
import Project from "../projectroom/page";
import Contact from "../contact/page";
import Footer from "../footer/page";
import styles from "../../css/Navbar.module.css";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar} style={{ position: "sticky", top: "0" }}>
        <div
          className={styles.logo}
          style={{
            padding: "5px",
            border: "5px solid black",
            fontWeight: "900",
            borderRadius: "5px",
          }}
        >
          NP
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </nav>
      <div
        className={`${styles.fullscreenMenu} ${
          menuOpen ? styles.fullscreenMenuOpen : ""
        }`}
      >
        <div className={styles.closeIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <ul>
          <li>
            <div onClick={toggleMenu}>
              <Link href="/">HOME</Link>
            </div>
          </li>

          <li>
            <Link href="/components/allwork">WORK</Link>
          </li>
          <li>
            <a
              href="mailto:example@example.com?subject=Contact%20Us&body=Please%20write%20your%20message%20here."
              onClick={toggleMenu}
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14t-gb55ZQauWKWjYcG4eaaun7z3IRJis/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
      <About />
      <Tooling />
      <Project />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
