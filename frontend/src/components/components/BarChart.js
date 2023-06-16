import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  datasets: [
    {
      label: "Ventes hebdomadaires",
      data: [12, 19, 3, 5, 2, 3, 8],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.1,
    },
  ],
};

const BarChart = () => {
  return (
    <>
      <Bar data={data} />
    </>
  );
};

export default BarChart;
