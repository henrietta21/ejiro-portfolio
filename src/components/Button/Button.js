import React, { useState } from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ text }) => {
 const [buttonState, setButtonState] = useState('');

 const handleClick = () => {
    setButtonState('clicked');
 };

 return (
    <Link onClick={handleClick} className={styles.button} to='#'>
      {text}
    </Link>
 );
};
export default Button;