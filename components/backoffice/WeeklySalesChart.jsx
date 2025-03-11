"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from 'chart.js';

import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};



export default function WeeklySalesChart() {

  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const tabs = [
  {
    title: "Sales",
    type: "sales",
    data: {
      labels,
      datasets: [
        {
          label: "Sales",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
  },
  {
    title: "Orders",
    type: "orders",
    data: {
      labels,
      datasets: [
        {
          label: "Orders",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
  },
];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl text-white">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">Weekly Sales</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    chartToDisplay == tab.type
                      ? "text-orange-600 border-orange-600"
                      : "text-gray-300 border-transparent hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"
                  }`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content to Display */}
        {
          tabs.map((tab,i)=>{
            if(chartToDisplay===tab.type){
               return <Line key={i} options={options} data={tab.data} />;
              
            }
            return null;
          })
        }
       
      </div>
    </div>
  );
}
