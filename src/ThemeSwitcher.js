import Content from './Content'
import { useState } from 'react';


const ThemeSwitcher = () => {
  const [clicked, setClicked] = useState(false);

  const handleThemeSwitcher = () => {
const currentTheme=localStorage.getItem("theme")
currentTheme==="light"?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")

window.location.reload()

  }
  
  return (
    <div >
      <input type="range" onClick={handleThemeSwitcher} />
      
    </div>
  )
}

export default ThemeSwitcher
