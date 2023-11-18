import { useState } from "react";
import styles from "./ClassificacaoGrupos.module.css";
import { useEffect } from "react";
function ClassificacaoGrupos() {
  const [classificacao, setClassificacao] = useState([]);
  const [selecaoGrupo, setSelecaoGrupo] = useState("A");

  useEffect(() => {
    const pegaClassificacao = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json"
      );

      const data = await response.json();

      setClassificacao(data);
    };
    pegaClassificacao();
  }, []);
  return (
    <>
      <div className={styles.div_select}>
        <select
          onChange={(e) => setSelecaoGrupo(e.target.value)}
          className={styles.select}
        >
          <option value="A">Grupo A</option>
          <option value="B">Grupo B</option>
          <option value="C">Grupo C</option>
          <option value="D">Grupo D</option>
          <option value="E">Grupo E</option>
          <option value="F">Grupo F</option>
          <option value="G">Grupo G</option>
          <option value="H">Grupo H</option>
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Seleção</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols Pró</th>
            <th>Gols Contra</th>
            <th>Saldo de Gols</th>
          </tr>
        </thead>
        <tbody>
          {classificacao
            .filter((item) => {
              return item.grupo === selecaoGrupo;
            })
            .map((grupo) => {
              return (
                <tr key={grupo.selecao}>
                  <td>{grupo.posicao}</td>
                  <td className={styles.esquerda}>{grupo.selecao}</td>
                  <td>{grupo.pontos}</td>
                  <td>{grupo.vitorias}</td>
                  <td>{grupo.empates}</td>
                  <td>{grupo.derrotas}</td>
                  <td>{grupo.gols_pro}</td>
                  <td>{grupo.gols_contra}</td>
                  <td>{grupo.saldo_gols}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default ClassificacaoGrupos;
