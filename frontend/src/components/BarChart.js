import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({data, labels, title, colors}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      },
    ],
  }

  return (
    <div>
      <h4>{title}</h4>
      <Bar data={chartData} width={400} height={400}></Bar>
    </div>
  )
}

export default BarChart;
