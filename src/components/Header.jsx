import style from '../styles/Header.module.css';

function Header() {
  return (
    <div className={style.hero}>
      <div className={style.content}>
        <h1 className={style.exec}> DESCUBRA A EXCELÊNCIA</h1>
        <h2 className={style.melh}> OS MELHORES SERVIÇOS</h2>
        <p className={style.just}>PELOS PREÇOS MAIS JUSTOS</p>
      </div>
    </div>
  );
}

export default Header;
