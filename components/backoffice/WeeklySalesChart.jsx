"use client";

import React, { useState } from "react";

export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="bg-slate-700 p-8 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>
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
                      : "text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-100"
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
              return <h3 key={i}>{tab.title}</h3>
               
              
            }
            return null;
          })
        }
       
      </div>
    </div>
  );
}
