// IMPORTANDO ESTILO
import style from '../styles/Header.module.css';

//IMPORTANDO IMAGEM
//import ImagemFundo from '../styles/img/cadeirasfundo.jpg'

function Header() {
  return (
    <div className={style.hero}>
      <div className={style.content}>
        <h1> DESCUBRA A EXCELÊNCIA</h1>
        <h2> OS MELHORES SERVIÇOS</h2>
        <p>PELOS PREÇOS MAIS JUSTOS</p>
      </div>
    </div>
  );
}

export default Header;
