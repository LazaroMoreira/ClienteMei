import style from '../styles/Navbar.module.css';
import ModalServicos from './ModalServicos';

function Navbar() {
  return (
    <div className="NavBar">
      <div className={style.main}>
        <div className={style.center}>
          <div className={style.menu}>
            <div className="logo">
              <h3>BARBEARIA GARERSHOP</h3>
            </div>
            <div>
              <ModalServicos buttonTitle="RESERVE AGORA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
