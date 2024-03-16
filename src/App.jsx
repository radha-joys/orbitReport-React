import { useState } from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from './components/Banner';

function App() {
  const [sat, setSat] = useState([]);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((sat) => sat.orbitType === currentType);
    setSat(displaySats);
  }
  return (
    <div>
      <Banner />
      <Buttons 
      filterByType = {filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;