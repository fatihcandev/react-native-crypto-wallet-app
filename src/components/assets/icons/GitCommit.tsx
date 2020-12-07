import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGitCommit(props: SvgProps) {
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
        d="M7 12c0 .342.033.675.096.996A1.303 1.303 0 017 13H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.032 0 .064.001.096.004A5.194 5.194 0 007 12zm9.904-.996C16.454 8.695 14.458 7 12 7c-2.458 0-4.453 1.695-4.904 4.004.546.04.904.428.904.996 0 .568-.358.956-.904.996C7.546 15.305 9.542 17 12 17c2.458 0 4.453-1.695 4.904-4.004.032.003.064.004.096.004h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.032 0-.064.001-.096.004zm0 0a5.19 5.19 0 010 1.992c-.546-.04-.904-.428-.904-.996 0-.568.358-.956.904-.996zM9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
        clipRule="evenodd"
      />
      <Mask id="git-commit_svg__a" width={24} height={10} x={0} y={7} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 12c0 .342.033.675.096.996A1.303 1.303 0 017 13H1c-.6 0-1-.4-1-1s.4-1 1-1h6c.032 0 .064.001.096.004A5.194 5.194 0 007 12zm9.904-.996C16.454 8.695 14.458 7 12 7c-2.458 0-4.453 1.695-4.904 4.004.546.04.904.428.904.996 0 .568-.358.956-.904.996C7.546 15.305 9.542 17 12 17c2.458 0 4.453-1.695 4.904-4.004.032.003.064.004.096.004h6c.5 0 1-.4 1-1s-.4-1-1-1h-6c-.032 0-.064.001-.096.004zm0 0a5.19 5.19 0 010 1.992c-.546-.04-.904-.428-.904-.996 0-.568.358-.956.904-.996zM9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#git-commit_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGitCommit;
