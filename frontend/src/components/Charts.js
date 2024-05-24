import { useContext } from "react";
import DataContext from "../contexts/dataContext";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Charts = () => {
  const data = useContext(DataContext);

  const continentCount = data.reduce((acc, item) => {
    acc[item.continent] = (acc[item.continent] || 0) + 1;
    return acc;
  }, {})

  const hornsCount = data.reduce((acc, item) => {
    acc[item.horns] = (acc[item.horns] || 0) + 1;
    return acc;
  }, {})


  const continentsLabels = Object.keys(continentCount);
  const continentsData = Object.values(continentCount);

  const hornsLabels = Object.keys(hornsCount);
  const hornsData = Object.values(hornsCount);

  const heightLabels = data.map((item) => item.name);
  const heightData = data.map((item) => item.height);

  return (
    <>
      <h2>Charts</h2>
      <div className="charts-container">
        <div className="chart-container">
          {data &&
            <PieChart
              data={continentsData}
              labels={continentsLabels}
              title='Number of antelopes by region'
              colors={['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']} />}
        </div>
        <div className="chart-container">
          {data &&
            <PieChart
              data={hornsData}
              labels={hornsLabels}
              title='Number of horns by types'
              colors={[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(240, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(160, 100, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]} />}
        </div>
        <div className="chart-container">
          {data &&
            <BarChart
              data={heightData}
              labels={heightLabels}
              title='Height by antelope'
              colors={[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(240, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(160, 100, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]} />}
        </div>
      </div>
    </>
  )
}

export default Charts;
