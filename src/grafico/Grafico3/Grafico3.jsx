import { useState } from "react";
import styled from "styled-components";

import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
  LabelList,
  ReferenceLine
} from "recharts";

import {
  colorSelector,
  formatNumber,
  convertToGraphCoordinates,
} from "./util";

import YAxisComponent from "./y_axis";
import { hardcodedData, rawResults } from "./data";
import "./styles.css";

// const GRAPH_MIN_WIDTH = 500;

export default function Grafico2(props) {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [useCalculatedData, setUseCalculatedData] = useState(false);

  const toggleWhichData = () => {
    setUseCalculatedData(!useCalculatedData);
  }

  const toggleSelection = (data, index) => {
    setSelectedIndex(index ? null : index);
  }

  const renderCell = (coordinates) => {
    return coordinates.map((coordinate, i) => {
      const { trueValue, displayedValue } = coordinate;

      return (
        <Cell
          key={i}
          fill={
            colorSelector(
              displayedValue, trueValue, i, selectedIndex
            )
          }
        />
      )
    })
  }

  const renderTooltip = props => {
    const { x, y, index, value } = props;
    const isPositive = value > 0;
    const isLargeValue = value >= 2000 || value <= -2000;
    const yValue = isPositive
      ? y - 40
      : y + 10;

    return selectedIndex === index && !isLargeValue ? (
      <g>
        <foreignObject x={x - 30} y={yValue} width={75} height={35}>
          <Tooltip isPositive={isPositive}>
            <div className="tooltip-body">
              <p>{formatNumber(value)}</p>
            </div>
          </Tooltip>
        </foreignObject>
      </g>
    ) : <g />
  }

  const renderLargeValueLabel = props => {
    const { value, x, y } = props;
    const isPositive = value > 0;
    const showValue = value >= 2000 || value <= -2000;
    const yValue = isPositive ? 0 : y - 10;

    return showValue ? (
      <g>
        <foreignObject x={x - 10} y={yValue} width={75} height={26}>
          <LargeValueLabel>
            <p>{formatNumber(value)}</p>
          </LargeValueLabel>
        </foreignObject>
      </g>
    ) : <g />
  }

  const xAxisTickFormatter = name => {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        {name}
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{label}</p>
        </div>
      );
    }
  
    return null;
  };
  
  
  const displayedData = useCalculatedData 
    ? convertToGraphCoordinates(rawResults) 
    : hardcodedData;
    
  // const width = displayedData.length * 28 < GRAPH_MIN_WIDTH
  //   ? GRAPH_MIN_WIDTH
  //   : displayedData.length * 28

  return (
    <div className="app">
      <div className="graph-wrapper">
        <YAxisComponent data={displayedData} />
        <BarChart
          data={displayedData}
          height={350}
          width={1400}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 20,
          }}
          barGap={10}
        >
          <XAxis 
            dataKey="label" 
            interval={0} 
            padding={{ left: 20 }} 
            // tickFormatter={xAxisTickFormatter}
            />
          <YAxis domain={[-2000, 2000]} padding={{ top: 10, bottom: 20 }} hide />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={0} stroke="#000" />
          <Bar
            dataKey="displayedValue"
            maxBarSize={22}
            isAnimationActive={false}
            onClick={toggleSelection}
          >
            {renderCell(displayedData)}
            {/* <LabelList dataKey="trueValue" content={renderLargeValueLabel} /> */}
            {/* <LabelList dataKey="displayedValue" value="test" content={renderTooltip} /> */}
          </Bar>
        </BarChart>
      </div>
      <button onClick={toggleWhichData}>Toggle to {useCalculatedData ? `hard-coded data` : `calculated data`}</button>
      <p>You can test the validity of the data shape conversion utility function by toggling between the hardcoded verus the converted data</p>
    </div>
  );
}

const LargeValueLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;

  p {
      position: relative;
      text-align: center;
      font-size: 0.75em !important;
      padding: 1px 3px;
      color: black;
      font-family: "Roboto", sans-serif;
  }
`

const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isPositive }) => !isPositive && "margin-top: 10px;"}
  z-index: 3;
  .tooltip-body {
      width: 100%;
      position: relative;
      background: white;
      border: 1px solid black;
      text-align: center;
      padding: 1px 3px;
      border-radius: 2px;

      &:after {
          content: "";
          position: absolute;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          margin-left: -10px;
          ${({ isPositive }) =>
    isPositive
      ? `bottom: 0;
          border-top-color: black
          border-bottom: 0;
          margin-bottom: -10px;`
      : `top: 0;
          border-bottom-color: black;
          border-top: 0;
          margin-top: -10px;`}
      }

      p {
          font-size: 0.75em;
          color: black;
          margin: 0;
          align-self: center;
      }
  }
`

// const Test = styled.div`
// width: 100px;
// height: 100px;
// color: pink;
// `

