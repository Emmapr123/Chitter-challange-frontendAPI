import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LoveButton(props) {

  const {color="#1d1d1b", fillColor="#fff", width=40.2, height=148.8} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 113.95 111.6"
      {...props}
    >
      <Path
        d="M57.18 26.92C63.95 4.16 76.44-.34 89.23 1.11c16.55 1.87 24.22 11.2 24.23 47.54 0 40.33-49.41 62.45-56 62.45C52.02 111.1.68 88.83.52 48.65.38 11.71 11.91.52 26.26.5 36.97.49 51.48 5.96 57.18 26.92z"
        fill={fillColor}
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={10}
      />
    </Svg>
  )
}

export { LoveButton }
