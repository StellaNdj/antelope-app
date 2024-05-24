import DataContext from "../contexts/dataContext";
import { useContext } from "react";

const Table = () => {
  const data = useContext(DataContext);

  return (
    <>
      <div className="table-container">
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Continent</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Horns</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((antelope, index) => (
              <tr key={index}>
                <td>{antelope.name}</td>
                <td>{antelope.continent}</td>
                <td>{antelope.weight}</td>
                <td>{antelope.height}</td>
                <td>{antelope.horns}</td>
                <td><img src={antelope.picture} alt={antelope.name} height={150} width={200}></img></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table;
