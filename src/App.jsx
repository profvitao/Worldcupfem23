/* eslint-disable react/jsx-key */
import "./App.css";
import selecoes from "./../apifakecopa2023-main/selecoes.json";
import Card from "./components/Card";
import GameTable from "./components/GameTable";
import ClassificacaoGrupos from "./components/ClassificacaoGrupos";
import FaseFinal from "./components/FaseFinal";
import TabButton from "./components/TabButton";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [abaMenu, setAbaMenu] = useState("Divisão dos grupos");

  function changeTab(tabName) {
    setActiveTab(tabName);
  }
  function mostraTab() {
    switch (activeTab) {
      case "Oitavas de Final":
        return (
          <>
            <h2>Oitavas de Final</h2>
            <section className="faseFinal">
              <FaseFinal fase="oitavas" />
            </section>
          </>
        );
      case "Quartas de Final":
        return (
          <>
            <h2>Quartas de Final</h2>
            <section className="faseFinal">
              <FaseFinal fase="quartas" />
            </section>
          </>
        );
      case "Semi Final":
        return (
          <>
            <h2>Semi Final</h2>
            <section className="faseFinal">
              <FaseFinal fase="semifinais" />
            </section>
          </>
        );
      case "Final":
        return (
          <>
            <h2>Final</h2>
            <section className="faseFinal">
              <FaseFinal fase="finais" />
            </section>
          </>
        );
    }
  }

  function trocaAba(abaMenu) {
    setAbaMenu(abaMenu);
  }
  function mostraAba() {
    switch (abaMenu) {
      case "Divisão dos grupos":
        return (
          <>
            <h1>Divisão dos Grupos</h1>

            <section className="cards">
              {selecoes.map((grupo) => {
                return <Card grupo={grupo} />;
              })}
            </section>
          </>
        );
      case "Tabela de Jogos":
        return (
          <>
            <h2>Tabela de Jogos</h2>
            <section>
              <GameTable />
            </section>
          </>
        );
      case "Classificação por Grupo":
        return (
          <>
            <h2>Classificação por Grupo</h2>
            <section>
              <ClassificacaoGrupos />
            </section>
          </>
        );
      case "Chaves dos Jogos":
        return (
          <>
            <div className="tabs">
              <TabButton
                tabName="Oitavas de Final"
                activeTab={activeTab}
                changeTab={changeTab}
              />
              <TabButton
                tabName="Quartas de Final"
                activeTab={activeTab}
                changeTab={changeTab}
              />
              <TabButton
                tabName="Semi Final"
                activeTab={activeTab}
                changeTab={changeTab}
              />
              <TabButton
                tabName="Final"
                activeTab={activeTab}
                changeTab={changeTab}
              />
            </div>

            <div className="tab_content">{mostraTab()}</div>
          </>
        );
    }
  }

  return (
    <>
      <div className="img"></div>

      <Header abaMenu={abaMenu} trocaAba={trocaAba} changeTab={mostraAba} />
      <div className="tab_content">{mostraAba()}</div>
    </>
  );
}

export default App;
