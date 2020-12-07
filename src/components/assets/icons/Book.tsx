import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBook(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 1H6.5C4.6 1 3 2.6 3 4.5v15C3 21.4 4.6 23 6.5 23H20c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM6.5 3H19v13H6.5c-.5 0-1 .1-1.5.4V4.5C5 3.7 5.7 3 6.5 3zM5 19.5c0 .8.7 1.5 1.5 1.5H19v-3H6.5c-.8 0-1.5.7-1.5 1.5z"
        clipRule="evenodd"
      />
      <Mask id="book_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 1H6.5C4.6 1 3 2.6 3 4.5v15C3 21.4 4.6 23 6.5 23H20c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM6.5 3H19v13H6.5c-.5 0-1 .1-1.5.4V4.5C5 3.7 5.7 3 6.5 3zM5 19.5c0 .8.7 1.5 1.5 1.5H19v-3H6.5c-.8 0-1.5.7-1.5 1.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#book_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBook;
