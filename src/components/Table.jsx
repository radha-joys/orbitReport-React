import './styling.css';
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat && sat.length > 0 ? (sat.map((data, id) => (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational === true ? 'Active' : 'Inactive'}</td>
          </tr>
         ))) : 
          <tr>
            <td colSpan="4">Loading data...</td>
          </tr>}
     </tbody>
   </table>
  );
};

export default Table;