import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUmbrella(props: SvgProps) {
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
        d="M0 11.883C.6 6.174 5.1 1.567 10.9 1.067 17.5.366 23.4 5.273 24 11.883c0 .3-.1.601-.3.801-.1.2-.4.3-.7.3H13v6.01c0 1.102.9 2.003 2 2.003s2-.901 2-2.003c0-.601.4-1.002 1-1.002s1 .401 1 1.002C19 21.197 17.2 23 15 23s-4-1.803-4-4.006v-6.01H1c-.3 0-.6-.1-.7-.3-.2-.2-.3-.5-.3-.8zm2.2-.901h19.6c-1-5.008-5.7-8.513-10.8-8.012-4.4.5-8 3.705-8.8 8.012z"
        clipRule="evenodd"
      />
      <Mask id="umbrella_svg__a" width={24} height={22} x={0} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 11.883C.6 6.174 5.1 1.567 10.9 1.067 17.5.366 23.4 5.273 24 11.883c0 .3-.1.601-.3.801-.1.2-.4.3-.7.3H13v6.01c0 1.102.9 2.003 2 2.003s2-.901 2-2.003c0-.601.4-1.002 1-1.002s1 .401 1 1.002C19 21.197 17.2 23 15 23s-4-1.803-4-4.006v-6.01H1c-.3 0-.6-.1-.7-.3-.2-.2-.3-.5-.3-.8zm2.2-.901h19.6c-1-5.008-5.7-8.513-10.8-8.012-4.4.5-8 3.705-8.8 8.012z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#umbrella_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUmbrella;
