// page.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaComment, FaTimes, FaUser } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import emailjs from 'emailjs-com'; // Import EmailJS library
import Icon from '../icon/page'
import styles from '../../css/Contact.module.css';
import emailGif from '../../Images/em.gif.gif'; // Import your animated GIF

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
        setTimeout(() => setIsModalOpen(true), 100); // Add a slight delay to ensure visibility before scaling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setIsModalVisible(false), 300); // Match this with the animation duration
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nfdi5yo', 'template_3cluta4', e.target, 'JR4-SlRL95UK-01_0')
            .then((result) => {
                console.log(result.text);
                // alert('Your message has been sent!');
                closeModal(); // Close modal after sending
            }, (error) => {
                console.log(error.text);
                // alert('There was an issue sending your message. Please try again later.');
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <div className={styles.contactPage}>

            <span className={styles.contactTitle} style={{ fontFamily: 'titlefonts, sans-serif', fontSize: '30px' }}>
                CONTACT WITH ME
            </span>
            <Icon />
            <div className={styles.panelHeading} onClick={openModal}>
                <span>Send me mail</span>
                <Image src={emailGif} alt="Email Animation" width={40} height={40} />
            </div>


            {isModalVisible && (
                <div className={styles.modalOverlay}>
                    <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : styles.modalClose}`}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className={styles.modalContent}>
                            <h2>Contact Us</h2>
                            <form className={styles.contactForm} onSubmit={sendEmail}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name"><FaUser /> Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="mobile"><FaPhone /> Mobile Number</label>
                                    <input type="text" id="mobile" name="mobile" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email"><FaEnvelope /> Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message"><FaComment /> Message</label>
                                    <textarea id="message" name="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className={styles.sendButton}>Send</button>
                            </form>
                        </div>
                    </div>

                </div>


            )}

        </div>
    );
};

export default Page;
