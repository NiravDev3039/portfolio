"use client";
import React from 'react';

const Page = () => {
    const openAboutLink = () => {
        window.open("https://drive.google.com/file/d/19f9DPFEVe4AwAgjkQV9UvdVIRWPLAENK/view?usp=drive_link", "_blank");
    };

    const openButton2Link = () => {
        window.open("https://drive.google.com/file/d/14t-gb55ZQauWKWjYcG4eaaun7z3IRJis/view?usp=drive_link", "_blank");
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#fffffff5',
            padding: '0 20px',
        }}>
            <h1 style={{
                color: 'black',
                fontSize: '8vw',
                fontFamily: 'titlefonts, sans-serif',
                textAlign: 'center',
            }}>Hi There I'm Nirav</h1>
            <h2 style={{
                color: 'black',
                fontSize: '5vw',
                fontFamily: 'titlefonts, sans-serif',
                textAlign: 'center',
            }}>Frontend Developer</h2>
            
            <div style={{
                display: 'flex',
                flexDirection: 'row', // Keep buttons in the same row
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                gap: '10px', // Add space between buttons
                flexWrap: 'nowrap', // Ensure buttons don't wrap
            }}>
                <button
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '16px',
                        border: '3px solid #24f524',
                        borderRadius: '5px',
                        filter: 'drop-shadow(1px 2px 2px black)',
                        flex: '0 1 auto', // Ensure buttons resize gracefully
                        maxWidth: '200px', // Limit max width
                        textAlign: 'center',
                    }}
                    onClick={openAboutLink}
                >
                    About Me
                </button>

                <button
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '16px',
                        border: '3px solid #24f524',
                        borderRadius: '5px',
                        filter: 'drop-shadow(1px 2px 2px black)',
                        flex: '0 1 auto', // Ensure buttons resize gracefully
                        maxWidth: '200px', // Limit max width
                        textAlign: 'center',
                    }}
                    onClick={openButton2Link}
                >
                    Download CV
                </button>
            </div>
        </div>
    );
}

export default Page;
