import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFastForward(props: SvgProps) {
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
        d="M2.6 4.209c-.3-.2-.7-.3-1-.1-.4.2-.6.5-.6.9V19c0 .4.2.7.6.9.1.099.3.099.4.099.2 0 .4-.1.6-.2l9-6.996c.2-.2.4-.5.4-.8v6.997c0 .4.2.7.6.9.1.099.3.099.4.099.2 0 .4-.1.6-.2l9-6.996c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.799l-9-6.996c-.3-.2-.7-.3-1.1-.1-.3.2-.5.5-.5.9v6.995c0-.3-.1-.6-.4-.799l-9-6.996zm17.8 7.796L14 7.006v9.995l6.4-4.997zm-11 0L3 7.006v9.995l6.4-4.997z"
        clipRule="evenodd"
      />
      <Mask id="fast-forward_svg__a" width={22} height={16} x={1} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M2.6 4.209c-.3-.2-.7-.3-1-.1-.4.2-.6.5-.6.9V19c0 .4.2.7.6.9.1.099.3.099.4.099.2 0 .4-.1.6-.2l9-6.996c.2-.2.4-.5.4-.8v6.997c0 .4.2.7.6.9.1.099.3.099.4.099.2 0 .4-.1.6-.2l9-6.996c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.799l-9-6.996c-.3-.2-.7-.3-1.1-.1-.3.2-.5.5-.5.9v6.995c0-.3-.1-.6-.4-.799l-9-6.996zm17.8 7.796L14 7.006v9.995l6.4-4.997zm-11 0L3 7.006v9.995l6.4-4.997z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#fast-forward_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFastForward;
