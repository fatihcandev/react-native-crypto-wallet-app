import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgExternalLink(props: SvgProps) {
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
        d="M21.4 2.1c.2.1.4.3.5.5.1.1.1.3.1.4v6c0 .6-.4 1-1 1s-1-.4-1-1V5.4l-9.3 9.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L18.6 4H15c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1zM19 19v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h6c.6 0 1-.4 1-1s-.4-1-1-1H5C3.3 5 2 6.3 2 8v11c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3z"
        clipRule="evenodd"
      />
      <Mask id="external-link_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.4 2.1c.2.1.4.3.5.5.1.1.1.3.1.4v6c0 .6-.4 1-1 1s-1-.4-1-1V5.4l-9.3 9.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L18.6 4H15c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1zM19 19v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h6c.6 0 1-.4 1-1s-.4-1-1-1H5C3.3 5 2 6.3 2 8v11c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#external-link_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgExternalLink;
