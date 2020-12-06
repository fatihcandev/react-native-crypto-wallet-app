import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowLeftCircle(props: SvgProps) {
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
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm4-8c.6 0 1-.4 1-1s-.4-1-1-1h-5.6l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-4 4c-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4 0 .1.1.2.2.3l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L10.4 13H16z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-left-circle_svg__a"
        width={22}
        height={22}
        x={1}
        y={1}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm4-8c.6 0 1-.4 1-1s-.4-1-1-1h-5.6l2.3-2.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-4 4c-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4 0 .1.1.2.2.3l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L10.4 13H16z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-left-circle_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowLeftCircle;
