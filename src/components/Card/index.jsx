/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
function Card({ grupo }) {
  return (
    <section className={styles.card}>
      <div
        className={styles.linha}
        style={{ backgroundColor: grupo.cor }}
      ></div>
      <h2>Grupo {grupo.grupo}</h2>
      <ul>
        {grupo.selecoes.map((selecao) => {
          return (
            <li key={selecao.sigla}>
              <img src={`/bandeiras/bandeiras/${selecao.imagem}.png`} />
              {selecao.selecao}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Card;
