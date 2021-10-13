import React from "react";
// import "./styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "2",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "3",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "4",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "5",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "6",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "7",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "8",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "9",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "10",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "11",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "12",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "13",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "14",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "15",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "16",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "17",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "18",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "19",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
  {
    name: "20",
    j: 3,
    m: 3,
    c: 6,
    d: 4,
    outros: 2
  },
];

export default function Grafico2() {
  
  const renderCustomAxisTick = ({ x, y, payload }) => {
    console.log('payload=> ', payload.value, payload);
  
    return payload.value;
  };

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    // return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
    return <text>value</text>;
  };


  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="j" stackId="a" fill="#FFB61F" />
      <Bar dataKey="m" stackId="a" fill="#DA58af" />
      <Bar dataKey="c" stackId="a" fill="#564ff0" />
      <Bar dataKey="d" stackId="a" fill="#1C9BDB" />
      <Bar dataKey="outros" stackId="a" fill="#7898A1" label={renderCustomBarLabel} />
    </BarChart>
  );
}
