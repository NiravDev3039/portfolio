import React from 'react'
import styles from '../../css/Tolling.module.css';
import Head from 'next/head';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaPython, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiNextdotjs } from 'react-icons/si';

const Tolling = [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
 
    { icon: <FaSass />, name: 'SCSS' },
  
];

const page = () => {
    return (
        <div className={styles.container}>
            
             
            
            <div className={styles.title}  style={{ fontFamily: 'titlefonts, sans-serif', fontSize:'30px' }}>TOOLING</div>
            <div className={styles.toolGrid}>
                {Tolling.map((tool, index) => (
                    <div key={index} className={styles.tool}>
                        {tool.icon}
                        <span>{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default page
