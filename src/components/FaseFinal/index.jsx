import { useEffect, useState } from "react";
import styles from "./FaseFinal.module.css";

// eslint-disable-next-line react/prop-types
function FaseFinal({ fase }) {
  const [jogos, setJogos] = useState([]);
  const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/${fase}-copa-2023.json`;

  useEffect(() => {
    const getJogos = async () => {
      const response = await fetch(url);

      const data = await response.json();

      setJogos(data);
    };

    getJogos();
  });

  return (
    <div className={styles.jogos}>
      {jogos.map((jogo) => {
        return (
          <div key={jogo.jogo} className={styles.jogo}>
            <h2 className={styles.titulo2}>
              {fase} {jogo.jogo} - chave {jogo.chave}{" "}
            </h2>
            <h3>
              <span className={styles.dia}>{jogo.dia}</span>
              <span className={styles.data}>{jogo.data}</span>
              <span className={styles.hora}>{jogo.hora}</span>
            </h3>

            <h3 className={styles.placar}>
              <div className={styles.mandante_box}>
                {jogo.mandante}
                <img
                  src={`/bandeiras/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
                  alt=""
                />
              </div>
              <div className={styles.placar_box}>
                <span className={styles.gols}>{jogo.gols_mandante}</span>x
                <span className={styles.gols}>{jogo.gols_visitante}</span>
              </div>
              <div className={styles.visitante_box}>
                <img
                  src={`/bandeiras/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
                  alt=""
                />
                {jogo.visitante}
              </div>
            </h3>
            <div className={styles.tempo_extra}>
              {jogo.prorrogacao === "Sim" ? (
                <div className={styles.centralizar}>
                  <span>
                    Prorrogação? {jogo.prorrogacao} | Placar Prorrogação:{" "}
                    {jogo.placar}
                  </span>
                  <span>
                    Penaltis? {jogo.penaltis} | Placar Penaltis:{" "}
                    {jogo.placar_penaltis}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <h4>Vencedor: {jogo.vencedor}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default FaseFinal;
