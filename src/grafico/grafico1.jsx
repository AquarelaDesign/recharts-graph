import React from "react";
import { 
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

const grafico1 = (props) => {
  
  const data = [
    {
      label: "Label A",
      valor: [0, 10],
      index: 1
    },
    {
      label: "Label B",
      valor: [20, 25],
      index: 2
    },
    {
      label: "Label C",
      valor: [30, 25],
      index: 3
    },
    {
      label: "Label D",
      valor: [30, 35],
      index: 4
    },
    {
      label: "Label E",
      valor: [20, 30],
      index: 5
    },
    {
      label: "Label F",
      valor: [15, 20],
      index: 6
    },
    {
      label: "Label G",
      valor: [10, 15],
      index: 7
    },
    {
      label: "Total",
      valor: [0, 35],
      index: 7
    }
  ];

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" xAxisId="x0" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar xAxisId="x0" dataKey="valor" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default grafico1;
