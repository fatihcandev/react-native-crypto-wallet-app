import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowUpLeftCircle(props: SvgProps) {
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
        d="M19.778 4.222a10.968 10.968 0 010 15.556 10.968 10.968 0 01-15.556 0 10.968 10.968 0 010-15.556 10.968 10.968 0 0115.556 0zm-3.96 4.95c0 .565-.424.99-.99.99h-3.252l3.96 3.96c.424.424.424.99 0 1.414-.425.424-.99.424-1.415 0l-3.96-3.96v3.252c0 .566-.424.99-.99.99a.967.967 0 01-.99-.99V9.172c0-.142 0-.283.071-.354 0-.141.142-.283.212-.354.071-.07.213-.212.354-.212.07-.07.212-.07.354-.07h5.656c.566 0 .99.424.99.99zM5.636 5.636a8.963 8.963 0 0112.728 0 8.963 8.963 0 010 12.728 8.963 8.963 0 01-12.728 0 8.963 8.963 0 010-12.728z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-up-left-circle_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.778 4.222a10.968 10.968 0 010 15.556 10.968 10.968 0 01-15.556 0 10.968 10.968 0 010-15.556 10.968 10.968 0 0115.556 0zm-3.96 4.95c0 .565-.424.99-.99.99h-3.252l3.96 3.96c.424.424.424.99 0 1.414-.425.424-.99.424-1.415 0l-3.96-3.96v3.252c0 .566-.424.99-.99.99a.967.967 0 01-.99-.99V9.172c0-.142 0-.283.071-.354 0-.141.142-.283.212-.354.071-.07.213-.212.354-.212.07-.07.212-.07.354-.07h5.656c.566 0 .99.424.99.99zM5.636 5.636a8.963 8.963 0 0112.728 0 8.963 8.963 0 010 12.728 8.963 8.963 0 01-12.728 0 8.963 8.963 0 010-12.728z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-up-left-circle_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowUpLeftCircle;
