import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBookmark(props: SvgProps) {
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
        d="M7 2h10c1.7 0 3 1.3 2.9 3v16c0 .4-.2.7-.5.9-.2.1-.3.1-.5.1s-.4-.1-.6-.2l-6.4-4.6-6.4 4.6c-.3.2-.7.3-1 .1-.3-.2-.5-.5-.5-.9V5c0-1.7 1.3-3 3-3zm5.6 13.2l5.4 3.9V5c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v14.1l5.4-3.9c.2-.1.4-.2.6-.2.2 0 .4.1.6.2z"
        clipRule="evenodd"
      />
      <Mask id="bookmark_svg__a" width={16} height={21} x={4} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M7 2h10c1.7 0 3 1.3 2.9 3v16c0 .4-.2.7-.5.9-.2.1-.3.1-.5.1s-.4-.1-.6-.2l-6.4-4.6-6.4 4.6c-.3.2-.7.3-1 .1-.3-.2-.5-.5-.5-.9V5c0-1.7 1.3-3 3-3zm5.6 13.2l5.4 3.9V5c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v14.1l5.4-3.9c.2-.1.4-.2.6-.2.2 0 .4.1.6.2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#bookmark_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBookmark;
