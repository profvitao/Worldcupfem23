import { useEffect } from "react";
import styles from "./GameTable.module.css";
import { useState } from "react";
function GameTable() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/tabela-copa-feminina-2023.json"
      );

      const data = await response.json();

      setJogos(data);
    };

    buscarJogos();
  }, []);
  return (
    <table className={styles.table}>
      <thead>
        <th>Jogo</th>
        <th>Dia</th>
        <th>Data</th>
        <th>Hora</th>
        <th>Grupo</th>
        <th colSpan={6}>Jogo</th>
      </thead>
      <tbody>
        {jogos.map((jogo) => {
          return (
            <tr key={jogo.jogo}>
              <td>{jogo.jogo}</td>
              <td>{jogo.dia}</td>
              <td>{jogo.data}</td>
              <td>{jogo.hora}</td>
              <td>{jogo.grupo}</td>
              <td>
                <span className={styles.direita}>
                  {jogo.mandante}
                  <img
                    src={`/bandeiras/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
                    alt=""
                  />
                </span>
              </td>
              <td className={styles.gols}>1{jogo.gols_mandante}</td>
              <td>x</td>
              <td className={styles.gols}>{jogo.gols_visitante}</td>
              <td>
                <span className={styles.esquerda}>
                  <img
                    src={`/bandeiras/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
                    alt=""
                  />
                  {jogo.visitante}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default GameTable;
