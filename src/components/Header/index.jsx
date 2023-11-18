import styles from "./Header.module.css";
function Header({ abaMenu, trocaAba, mostraAba }) {
  return (
    <header className={styles.header}>
      <h1>Copa do Mundo Feminina de 2023</h1>
      <ul>
        <li
          className={abaMenu === "Divisão dos grupos" ? "active" : ""}
          onClick={() => trocaAba("Divisão dos grupos")}
        >
          Divisão dos grupos
        </li>

        <li
          className={abaMenu === "Tabela de Jogos" ? "active" : ""}
          onClick={() => trocaAba("Tabela de Jogos")}
        >
          Tabela de Jogos
        </li>
        <li
          className={abaMenu === "Classificação por Grupo" ? "active" : ""}
          onClick={() => trocaAba("Classificação por Grupo")}
        >
          Classificação por Grupo
        </li>
        <li
          className={abaMenu === "Chaves dos Jogos" ? "active" : ""}
          onClick={() => trocaAba("Chaves dos Jogos")}
        >
          Chaves dos Jogos
        </li>
      </ul>
    </header>
  );
}

export default Header;
