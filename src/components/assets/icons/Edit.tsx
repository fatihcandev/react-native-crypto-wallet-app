import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgEdit(props: SvgProps) {
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
        d="M22.7 6.7l-10 10c-.2.2-.4.3-.7.3H8c-.6 0-1-.4-1-1v-4c0-.3.1-.5.3-.7l10-10c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4zm-1.7 8V20c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h5.3c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-5.3c0-.6.4-1 1-1s1 .4 1 1zM18 3.4L20.6 6l-9 9H9v-2.6l9-9z"
        clipRule="evenodd"
      />
      <Mask id="edit_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M22.7 6.7l-10 10c-.2.2-.4.3-.7.3H8c-.6 0-1-.4-1-1v-4c0-.3.1-.5.3-.7l10-10c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4zm-1.7 8V20c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h5.3c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-5.3c0-.6.4-1 1-1s1 .4 1 1zM18 3.4L20.6 6l-9 9H9v-2.6l9-9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#edit_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgEdit;
