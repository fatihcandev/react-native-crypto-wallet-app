import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgStatuspending(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 62 62"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="orange"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={4}
        d="M30 62c16.569 0 30-13.431 30-30C60 15.431 46.569 2 30 2 13.431 2 0 15.431 0 32c0 16.569 13.431 30 30 30z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M35.184 14.07a1.703 1.703 0 00-2.115 1.143l-4.435 15.545-8.766 7.67a1.726 1.726 0 00-.16 2.423c.627.709 1.708.78 2.423.16l9.144-8.001c.248-.218.427-.504.514-.823l4.572-16.002a1.703 1.703 0 00-1.177-2.114z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgStatuspending;
