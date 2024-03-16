import './styling.css';
import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className = "flex-container">
      {displaySats.map((sat) => {
        return (
            <button key={sat} onClick={() => filterByType(sat)}> 
              {sat} orbit
            </button>
        )
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;