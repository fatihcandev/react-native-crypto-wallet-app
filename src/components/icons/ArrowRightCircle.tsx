import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowRightCircle(props: SvgProps) {
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
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm4.937-9.269c-.02-.048-.037-.09-.037-.131 0-.1-.1-.2-.2-.3l-4-4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3H8c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4c.1-.1.2-.2.2-.3.1-.1.1-.3.1-.4 0-.117-.034-.2-.063-.269z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-right-circle_svg__a"
        width={22}
        height={22}
        x={1}
        y={1}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm4.937-9.269c-.02-.048-.037-.09-.037-.131 0-.1-.1-.2-.2-.3l-4-4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.3 2.3H8c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4c.1-.1.2-.2.2-.3.1-.1.1-.3.1-.4 0-.117-.034-.2-.063-.269z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-right-circle_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowRightCircle;
