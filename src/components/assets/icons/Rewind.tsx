import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgRewind(props: SvgProps) {
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
        d="M10.3 4.209c.3-.2.8-.3 1.1-.1.4.2.6.5.6.9V19c0 .4-.3.7-.6.9-.1.099-.3.099-.4.099-.2 0-.4-.1-.6-.2l-9-6.996c-.3-.2-.4-.5-.4-.8 0-.3.1-.6.3-.799l9-6.996zm1.7 7.796c0-.3.1-.6.3-.8l9-6.996c.3-.2.8-.3 1.1-.1.4.2.6.5.6.9V19c0 .4-.3.7-.6.9-.1.099-.3.099-.4.099-.2 0-.4-.1-.6-.2l-9-6.996c-.3-.2-.4-.5-.4-.8zm-8.4 0l6.4 4.997V7.007l-6.4 4.998zm11 0l6.4 4.997V7.007l-6.4 4.998z"
        clipRule="evenodd"
      />
      <Mask id="rewind_svg__a" width={22} height={16} x={1} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M10.3 4.209c.3-.2.8-.3 1.1-.1.4.2.6.5.6.9V19c0 .4-.3.7-.6.9-.1.099-.3.099-.4.099-.2 0-.4-.1-.6-.2l-9-6.996c-.3-.2-.4-.5-.4-.8 0-.3.1-.6.3-.799l9-6.996zm1.7 7.796c0-.3.1-.6.3-.8l9-6.996c.3-.2.8-.3 1.1-.1.4.2.6.5.6.9V19c0 .4-.3.7-.6.9-.1.099-.3.099-.4.099-.2 0-.4-.1-.6-.2l-9-6.996c-.3-.2-.4-.5-.4-.8zm-8.4 0l6.4 4.997V7.007l-6.4 4.998zm11 0l6.4 4.997V7.007l-6.4 4.998z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#rewind_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgRewind;
