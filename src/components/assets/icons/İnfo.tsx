import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function Svgİnfo(props: SvgProps) {
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
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm10 0v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm0-4c0-.3-.1-.5-.3-.7-.2-.2-.6-.3-.9-.3-.058.058-.082.082-.111.092-.022.008-.046.008-.089.008-.05 0-.075.025-.1.05-.025.025-.05.05-.1.05l-.1.1c-.2.2-.3.4-.3.7 0 .3.1.5.3.7 0 0 0 .1.1.1.05 0 .075.025.1.05.025.025.05.05.1.05.058.057.082.082.111.092A.274.274 0 0011.8 9h.2c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7z"
        clipRule="evenodd"
      />
      <Mask id="info_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm10 0v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm0-4c0-.3-.1-.5-.3-.7-.2-.2-.6-.3-.9-.3-.058.058-.082.082-.111.092-.022.008-.046.008-.089.008-.05 0-.075.025-.1.05-.025.025-.05.05-.1.05l-.1.1c-.2.2-.3.4-.3.7 0 .3.1.5.3.7 0 0 0 .1.1.1.05 0 .075.025.1.05.025.025.05.05.1.05.058.057.082.082.111.092A.274.274 0 0011.8 9h.2c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#info_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Svgİnfo;
