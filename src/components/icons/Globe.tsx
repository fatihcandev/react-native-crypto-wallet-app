import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGlobe(props: SvgProps) {
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
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8.9 10h-4c-.2-2.8-1.1-5.4-2.7-7.7 3.6.9 6.3 4 6.7 7.7zM15 13H9.1c.2 2.7 1.2 5.3 3 7.4 1.6-2.1 2.6-4.7 2.9-7.4zm-5.9-2c.3-2.7 1.3-5.3 2.9-7.4 1.7 2.2 2.7 4.8 2.9 7.4H9.1zm-2 0c.2-2.8 1.1-5.4 2.6-7.7-3.5.9-6.2 4-6.6 7.7h4zm-4 2h4c.2 2.8 1.1 5.4 2.7 7.7-3.6-.9-6.3-4-6.7-7.7zM17 13c-.3 2.8-1.2 5.4-2.7 7.7 3.5-.9 6.2-4 6.7-7.7h-4z"
        clipRule="evenodd"
      />
      <Mask id="globe_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8.9 10h-4c-.2-2.8-1.1-5.4-2.7-7.7 3.6.9 6.3 4 6.7 7.7zM15 13H9.1c.2 2.7 1.2 5.3 3 7.4 1.6-2.1 2.6-4.7 2.9-7.4zm-5.9-2c.3-2.7 1.3-5.3 2.9-7.4 1.7 2.2 2.7 4.8 2.9 7.4H9.1zm-2 0c.2-2.8 1.1-5.4 2.6-7.7-3.5.9-6.2 4-6.6 7.7h4zm-4 2h4c.2 2.8 1.1 5.4 2.7 7.7-3.6-.9-6.3-4-6.7-7.7zM17 13c-.3 2.8-1.2 5.4-2.7 7.7 3.5-.9 6.2-4 6.7-7.7h-4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#globe_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGlobe;
