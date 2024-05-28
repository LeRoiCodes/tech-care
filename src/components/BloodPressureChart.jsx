// src/components/BloodPressureChart.jsx
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// eslint-disable-next-line react/prop-types
const BloodPressureChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: '#72635',
          font: {
             weight: 'normal',
             size: 12
          },
       }
      },
      title: {
        display: false,
        text: 'Blood Pressure',
        font:{
          size: 18,
          weight: 'bold',
          family: 'Monrope, sans-serif'
        },
        color:"072635",
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default BloodPressureChart;
