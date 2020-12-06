import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFilm(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M19.8 1H4.2C2.4 1 1 2.4 1 4.2v15.6C1 21.6 2.4 23 4.2 23h15.6c1.8 0 3.2-1.4 3.2-3.2V4.2C23 2.4 21.6 1 19.8 1zM18 8h3v3h-3V8zM8 11h8V3H8v8zm-2 0H3V8h3v3zm0 2H3v3h3v-3zm2 0h8v8H8v-8zm13 0h-3v3h3v-3zm0-8.8V6h-3V3h1.8c.7 0 1.2.5 1.2 1.2zM6 3H4.2C3.5 3 3 3.5 3 4.2V6h3V3zM3 19.8V18h3v3H4.2c-.7 0-1.2-.5-1.2-1.2zM18 21h1.8c.7 0 1.2-.5 1.2-1.2V18h-3v3z"
        clipRule="evenodd"
      />
      <Mask id="film_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19.8 1H4.2C2.4 1 1 2.4 1 4.2v15.6C1 21.6 2.4 23 4.2 23h15.6c1.8 0 3.2-1.4 3.2-3.2V4.2C23 2.4 21.6 1 19.8 1zM18 8h3v3h-3V8zM8 11h8V3H8v8zm-2 0H3V8h3v3zm0 2H3v3h3v-3zm2 0h8v8H8v-8zm13 0h-3v3h3v-3zm0-8.8V6h-3V3h1.8c.7 0 1.2.5 1.2 1.2zM6 3H4.2C3.5 3 3 3.5 3 4.2V6h3V3zM3 19.8V18h3v3H4.2c-.7 0-1.2-.5-1.2-1.2zM18 21h1.8c.7 0 1.2-.5 1.2-1.2V18h-3v3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#film_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFilm;
