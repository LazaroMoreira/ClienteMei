import style from '../styles/Navbar.module.css'
//import logo from '../styles/img/logopeqn.png'
import { useState } from "react"

function Navbar() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='NavBar'>
      <div className={style.main}>
        <div className={style.center}>
          <div className={style.menu}>
            <div className='logo'>
              <h3>BARBEARIA GARERSHOP</h3>
            </div>
            <div className='item-menu'>
              <button onnclick={e => setIsActive(!isActive)}>RESERVE AGORA</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Navbar