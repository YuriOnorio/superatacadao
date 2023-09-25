import styles from "./Cardapio.module.scss";
import logo from "assets/logo.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="logo" />
      </nav>
      
      <header className={styles.header}>
        <div className={styles.header__text}>
          O melhor atacadao !!!
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        
        <div className={styles.cardapo__filtros}>
          <Filtros />
        </div>
      </section>
    </main>
  );
}
