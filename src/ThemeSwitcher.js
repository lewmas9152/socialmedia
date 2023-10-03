import Content from './Content'
import styles from './ThemeSwitcher.module.css';
import { useState } from 'react';

const ThemeSwitcher = () => {
  const [clicked, setClicked] = useState(false);

  const handleThemeSwitcher = () => {
    console.log("Button clicked");

  }
  return (
    <div >
      <input type="range" onClick={handleThemeSwitcher} />
      
    </div>
  )
}

export default ThemeSwitcher
