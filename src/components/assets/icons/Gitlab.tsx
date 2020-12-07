import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGitlab(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 25 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.216 1.975l3.7 11.2c.3.8 0 1.7-.7 2.1l-10.6 7.7c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-10.6-7.7c-.7-.5-1-1.3-.7-2.1l3.7-11.2c.1-.3.2-.5.4-.6.5-.5 1.4-.5 1.9 0 .2.2.3.4.4.6l2.2 6.8h6.6l2.2-6.8c.1-.3.2-.5.4-.6.5-.5 1.4-.5 1.9 0 .2.2.3.4.4.6zm-18.2 11.8l10 7.2 10-7.3-1.2-3.6-1.9-5.8-1.9 5.8c-.2.4-.6.7-1 .7h-8c-.5 0-.9-.3-1-.7l-1.9-5.8-3.1 9.5z"
        clipRule="evenodd"
      />
      <Mask id="gitlab_svg__a" width={25} height={23} x={0} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.216 1.975l3.7 11.2c.3.8 0 1.7-.7 2.1l-10.6 7.7c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-10.6-7.7c-.7-.5-1-1.3-.7-2.1l3.7-11.2c.1-.3.2-.5.4-.6.5-.5 1.4-.5 1.9 0 .2.2.3.4.4.6l2.2 6.8h6.6l2.2-6.8c.1-.3.2-.5.4-.6.5-.5 1.4-.5 1.9 0 .2.2.3.4.4.6zm-18.2 11.8l10 7.2 10-7.3-1.2-3.6-1.9-5.8-1.9 5.8c-.2.4-.6.7-1 .7h-8c-.5 0-.9-.3-1-.7l-1.9-5.8-3.1 9.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#gitlab_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGitlab;
