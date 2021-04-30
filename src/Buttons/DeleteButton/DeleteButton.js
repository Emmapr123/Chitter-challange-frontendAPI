import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeleteButton(props) {

  const {color="#e30613", width=29.93, height=39.12} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 84.85 110.9"
      {...props}
    >
      <Path
        d="M.53 8.98h83.79L77.44 110.4c-70.53-.09 6.77.12-70.53-.09zM40.99 19.15v84.7M61.42 19.15v84.7M20.59 19.15v84.7M24.91 8.98c.17-.8.09-2.64 1.49-3.69C36.68-2.37 56.75.76 59.83 3.74c1.55 1.5 1.59 3.73 1.7 5.24h0"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={10}
      />
    </Svg>
  )
}

export { DeleteButton }
