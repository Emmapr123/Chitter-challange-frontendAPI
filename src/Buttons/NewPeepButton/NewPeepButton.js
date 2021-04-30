import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function NewPeepButton(props) {

  const {color="#009fe3", width=40, height=40} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 113.39 113.39"
      {...props}
    >
      <Circle cx={56.69} cy={56.69} r={width/2} fill={color} />
      <Path
        d="M37.25 88.82c-1.46-.77 26-67.34 37.83-64.16 5.21 1.41 18.2 15 4.39 22.49-9.12 3.88-12.11 6.74-11.51 6.58 13.8-3.67 14.29-5.39 13.8-3.67-2.65 9.39-22.57 8.21-32.54 21.54-7.9 10.56-11.33 17.54-11.97 17.22z"
        fill="#fff"
      />
      <Path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M32.03 42.14v17.58M24.25 50.76h15.69"
      />
    </Svg>
  )
}

export { NewPeepButton }
