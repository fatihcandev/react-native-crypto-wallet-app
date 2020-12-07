import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgNavigation2(props: SvgProps) {
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
        d="M12.872 2.699L19.9 21.663c.2.3.1.799-.302 1.098-.1.1-.401.2-.602.2-.2 0-.301 0-.502-.1l-6.525-3.693-6.526 3.693c-.301.2-.803.2-1.104-.1a1.122 1.122 0 01-.301-1.098L11.065 2.7c.1-.4.502-.699.904-.699.401 0 .803.3.903.699zm-.903 14.273c.2 0 .3 0 .502.1l4.618 2.695-5.12-13.874-5.12 13.774 4.618-2.595c.2-.1.3-.1.502-.1z"
        clipRule="evenodd"
      />
      <Mask id="navigation-2_svg__a" width={16} height={21} x={4} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.872 2.699L19.9 21.663c.2.3.1.799-.302 1.098-.1.1-.401.2-.602.2-.2 0-.301 0-.502-.1l-6.525-3.693-6.526 3.693c-.301.2-.803.2-1.104-.1a1.122 1.122 0 01-.301-1.098L11.065 2.7c.1-.4.502-.699.904-.699.401 0 .803.3.903.699zm-.903 14.273c.2 0 .3 0 .502.1l4.618 2.695-5.12-13.874-5.12 13.774 4.618-2.595c.2-.1.3-.1.502-.1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#navigation-2_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgNavigation2;
