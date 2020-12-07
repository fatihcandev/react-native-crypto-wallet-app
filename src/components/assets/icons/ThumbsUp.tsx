import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgThumbsUp(props: SvgProps) {
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
        d="M22.367 9.2c-.506-.6-1.215-1.1-2.025-1.2h-5.165V5c0-2.2-1.823-4-4.05-4-.405 0-.81.2-.912.6L6.468 10h-2.43C2.316 10 1 11.3 1 13v7c0 1.7 1.316 3 3.038 3h14.481c1.519 0 2.734-1.1 3.038-2.5l1.418-9c.1-.8-.102-1.6-.608-2.3zM6.063 21H4.038c-.608 0-1.013-.4-1.013-1v-7c0-.6.405-1 1.013-1h2.025v9zm12.456 0c.506 0 .911-.3 1.013-.8l1.519-9.1c0-.2 0-.5-.203-.7-.202-.2-.405-.4-.709-.4h-5.974c-.608 0-1.013-.4-1.013-1V5c0-.9-.608-1.6-1.418-1.9L8.09 11.2V21h10.43z"
        clipRule="evenodd"
      />
      <Mask id="thumbs-up_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.367 9.2c-.506-.6-1.215-1.1-2.025-1.2h-5.165V5c0-2.2-1.823-4-4.05-4-.405 0-.81.2-.912.6L6.468 10h-2.43C2.316 10 1 11.3 1 13v7c0 1.7 1.316 3 3.038 3h14.481c1.519 0 2.734-1.1 3.038-2.5l1.418-9c.1-.8-.102-1.6-.608-2.3zM6.063 21H4.038c-.608 0-1.013-.4-1.013-1v-7c0-.6.405-1 1.013-1h2.025v9zm12.456 0c.506 0 .911-.3 1.013-.8l1.519-9.1c0-.2 0-.5-.203-.7-.202-.2-.405-.4-.709-.4h-5.974c-.608 0-1.013-.4-1.013-1V5c0-.9-.608-1.6-1.418-1.9L8.09 11.2V21h10.43z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#thumbs-up_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgThumbsUp;
