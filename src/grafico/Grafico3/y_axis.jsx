import * as React from "react"

const YAxisComponent = (params) => {
  
  const { data } = params;
  console.log('data=>', data);

  const y = (value) => {
    return (
      <g className="recharts-layer recharts-cartesian-axis-tick">
        <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="280" x2="60" y2="280" />
        <text width="60" height="280" x="52" y="280" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
          <tspan x="52" dy="0.355em">{value}</tspan>
        </text>
      </g>
    )
  }

  const eixos = (data) => {
    
  }

  return (
    <div className="y-axis-wrapper">
      <svg width="60" height="350" viewBox="1 0 60 350">
        <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
          <line className="recharts-cartesian-axis-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="60" y1="20" x2="60" y2="300" />

          <g className="recharts-cartesian-axis-ticks">
            {eixos(data)}
            {/*             
            <g className="recharts-layer recharts-cartesian-axis-tick">
              <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="280" x2="60" y2="280" />
              <text width="60" height="280" x="52" y="280" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                <tspan x="52" dy="0.355em">-2000</tspan>
              </text>
            </g>

            <g className="recharts-layer recharts-cartesian-axis-tick">
              <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="217.5" x2="60" y2="217.5" />
              <text width="60" height="280" x="52" y="217.5" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                <tspan x="52" dy="0.355em">-1000</tspan>
              </text>
            </g>

            <g className="recharts-layer recharts-cartesian-axis-tick">
              <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="155" x2="60" y2="155" />
              <text width="60" height="280" x="52" y="155" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                <tspan x="52" dy="0.355em">0</tspan>
              </text>
            </g>

            <g className="recharts-layer recharts-cartesian-axis-tick">
              <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="92.5" x2="60" y2="92.5" />
              <text width="60" height="280" x="52" y="92.5" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                <tspan x="52" dy="0.355em">1000</tspan>
              </text>
            </g>

            <g className="recharts-layer recharts-cartesian-axis-tick">
              <line className="recharts-cartesian-axis-tick-line" width="60" height="280" x="0" y="20" stroke="#666" fill="none" x1="54" y1="30" x2="60" y2="30" />
              <text width="60" height="280" x="52" y="30" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                <tspan x="52" dy="0.355em">2000</tspan>
              </text>
            </g> 
            */}

          </g>

        </g>
      </svg>
    </div>
  )
}

export default YAxisComponent;