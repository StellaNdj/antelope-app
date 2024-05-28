import { useContext } from "react";
import DataContext from "../contexts/dataContext";
import PieChart from "./PieChart";
import SelectableChart from "./SelectableChart";

const Charts = () => {
  const data = useContext(DataContext);

  // Count the number of continents
  const continentCount = data.reduce((acc, item) => {
    acc[item.continent] = (acc[item.continent] || 0) + 1;
    return acc;
  }, {})

  // Count the numbers of different horns
  const hornsCount = data.reduce((acc, item) => {
    acc[item.horns] = (acc[item.horns] || 0) + 1;
    return acc;
  }, {})

  // Determine the name of the continent and their values
  const continentsLabels = Object.keys(continentCount);
  const continentsData = Object.values(continentCount);

  // Determine the horns name and their values
  const hornsLabels = Object.keys(hornsCount);
  const hornsData = Object.values(hornsCount);

  return (
    <>
      <h2>Charts</h2>
      <div className="charts-container">
        <div className="chart-container">
          {data &&
            <PieChart
              data={continentsData}
              labels={continentsLabels}
              title='Antelopes by continents'
              colors={['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.5)']} />}
        </div>
        <div className="chart-container">
          {data &&
            <PieChart
              data={hornsData}
              labels={hornsLabels}
              title='Antelopes by horns types'
              colors={[
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.1)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(54, 162, 235, 0.8)'
              ]} />}
        </div>
      </div>
      <div className="charts-container">
        <SelectableChart data={data}></SelectableChart>
      </div>
    </>
  )
}

export default Charts;
