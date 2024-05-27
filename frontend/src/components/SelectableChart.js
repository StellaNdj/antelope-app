import { useState } from "react";
import BarChart from "./BarChart";

const SelectableChart = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState('height');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleRegion = (e) => {
    console.log(e.target.value);
    setSelectedRegion(e.target.value);
  }


  const filteredData = selectedRegion === 'All' ? data : data.filter(item => item.continent === selectedRegion);

  const labels = filteredData.map(item => item.name);
  const heightsData = filteredData.map(item => item.height);
  const weightsData = filteredData.map(item => item.weight);

  const chartData = selectedOption === 'height' ? heightsData : weightsData;
  const chartTitle = selectedOption === 'height' ? 'Height by antelope' : 'Weight by antelope'

  return (
    <div>
      <div>
        <label>Select data to display: </label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="height">Height</option>
          <option value="weight">Weight</option>
        </select>
        <label>Filter by region:</label>
        <select value={selectedRegion} onChange={handleRegion}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className="bchart-container">
          {data &&
            <BarChart
              data={chartData}
              labels={labels}
              title={chartTitle}
              colors={[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(240, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(160, 100, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(100, 255, 218, 0.2)',
                'rgba(123, 159, 235, 0.2)',
                'rgba(75, 255, 120, 0.2)',
                'rgba(200, 99, 132, 0.2)',
                'rgba(54, 205, 50, 0.2)',
                'rgba(230, 126, 86, 0.2)',
                'rgba(135, 75, 192, 0.2)',
                'rgba(160, 192, 235, 0.2)',
                'rgba(255, 180, 64, 0.2)',
                'rgba(153, 202, 255, 0.2)',
                'rgba(255, 205, 120, 0.2)',
                'rgba(201, 230, 207, 0.2)',
                'rgba(100, 230, 218, 0.2)',
                'rgba(123, 205, 235, 0.2)',
                'rgba(75, 230, 120, 0.2)',
                'rgba(200, 180, 132, 0.2)'
              ]} />}
        </div>
    </div>
  )
}

export default SelectableChart;
