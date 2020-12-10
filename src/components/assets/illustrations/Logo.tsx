import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLogo(props: SvgProps) {
  return (
    <Svg
      width={124}
      height={122}
      viewBox="0 0 124 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.566 15.626l25.056 8.997L61.35 1 22.566 15.626zM82.312 37.075l-34.69-12.452L61.35 1l20.962 36.075zM122.632 51.55l-40.32-14.475L61.35 1l39.724 14.626 21.558 35.925zM122.632 51.551l-21.963 17.115-18.357-31.59 40.32 14.475z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122.632 51.55l-7.605 41.83-14.359-24.714 21.964-17.115z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.028 93.38h-43.92L86.31 79.85l14.359-11.183 14.359 24.713z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.028 93.38L82.6 120.834H40.257l30.85-27.456h43.921z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.108 93.38l-30.85 27.455-4.616-27.456h35.466zM40.257 120.835L7.671 93.379h27.971l4.615 27.456z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.642 93.38H7.672l21.69-37.33 6.28 37.33zM29.361 56.049l-21.69 37.33-6.67-41.829 21.565-35.924 6.795 40.423z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.622 24.623l-18.26 31.426-6.796-40.422 25.056 8.996z"
        fill="#347AF0"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgLogo;
