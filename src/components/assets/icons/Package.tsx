import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPackage(props: SvgProps) {
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
        d="M21.3 5.226l-8-3.931c-.8-.393-1.8-.393-2.7 0l-8 3.931C1.6 5.718 1 6.701 1 7.782v9.338c0 1.08.6 2.162 1.7 2.653l8 3.932c.4.197.9.295 1.3.295.5 0 .9-.098 1.3-.295l8-3.931c1-.492 1.7-1.475 1.7-2.654V7.782c0-1.081-.6-2.064-1.7-2.556zm-9.7-2.26c.1-.098.3-.098.4-.098.2 0 .3 0 .4.098l7.4 3.637L17 7.979 9.2 4.145l2.4-1.18zM3.5 18.103l7.5 3.636v-9.632L3 8.175v9.043c0 .295.2.688.5.885zm.7-11.5L7 5.226l7.8 3.834-2.8 1.376-7.8-3.833zm16.2 11.5c.4-.197.6-.492.6-.885V8.175l-8 3.932v9.632l7.4-3.636z"
        clipRule="evenodd"
      />
      <Mask id="package_svg__a" width={22} height={23} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M21.3 5.226l-8-3.931c-.8-.393-1.8-.393-2.7 0l-8 3.931C1.6 5.718 1 6.701 1 7.782v9.338c0 1.08.6 2.162 1.7 2.653l8 3.932c.4.197.9.295 1.3.295.5 0 .9-.098 1.3-.295l8-3.931c1-.492 1.7-1.475 1.7-2.654V7.782c0-1.081-.6-2.064-1.7-2.556zm-9.7-2.26c.1-.098.3-.098.4-.098.2 0 .3 0 .4.098l7.4 3.637L17 7.979 9.2 4.145l2.4-1.18zM3.5 18.103l7.5 3.636v-9.632L3 8.175v9.043c0 .295.2.688.5.885zm.7-11.5L7 5.226l7.8 3.834-2.8 1.376-7.8-3.833zm16.2 11.5c.4-.197.6-.492.6-.885V8.175l-8 3.932v9.632l7.4-3.636z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#package_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPackage;
