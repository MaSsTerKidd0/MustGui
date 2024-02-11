import React, { useState, useEffect } from 'react';
import styles from './DateTimeDisplay.module.css';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update the date and time every second

        return () => {
            clearInterval(timer); // Clean up the interval on component unmount
        };
    }, []);

    // Function to format the date as dd/mm/yy
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
        const year = date.getFullYear().toString().substr(-2); // Get last two digits of year

        return `${day}/${month}/${year}`;
    };

    return (
        <div className={styles.dateTimeContainer}>
            <p className={styles.dateTimeText}>
                {formatDate(currentDateTime)} {currentDateTime.toLocaleTimeString()}
            </p>
        </div>
    );
};

export default DateTimeDisplay;
