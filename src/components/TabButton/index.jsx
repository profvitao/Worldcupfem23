/* eslint-disable react/prop-types */
function TabButton({ tabName, activeTab, changeTab }) {
  return (
    <>
      <button
        className={activeTab === tabName ? "active" : ""}
        onClick={() => changeTab(tabName)}
      >
        {tabName}
      </button>
    </>
  );
}

export default TabButton;
