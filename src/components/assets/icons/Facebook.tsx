import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFacebook(props: SvgProps) {
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
        d="M18.96 6c0 .6-.398 1-.996 1h-2.991v2h2.99c.3 0 .6 0 .799.3.199.3.299.6.199.9l-.997 4c-.1.5-.499.8-.997.8h-1.994v7c0 .6-.399 1-.997 1H9.988c-.598 0-.997-.4-.997-1v-7H6.997C6.399 15 6 14.6 6 14v-4c0-.6.399-1 .997-1h1.994V7c0-3.3 2.692-6 5.982-6h2.99c.6 0 .998.4.998 1v4zm-2.292 5h-2.692c-.598 0-.997-.4-.997-1V7c0-1.1.897-2 1.994-2h1.994V3h-1.994c-2.194 0-3.988 1.8-3.988 4v3c0 .6-.399 1-.997 1H7.994v2h1.994c.598 0 .997.4.997 1v7h1.994v-7c0-.6.399-1 .997-1h2.193l.499-2z"
        clipRule="evenodd"
      />
      <Mask id="facebook_svg__a" width={13} height={22} x={6} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.96 6c0 .6-.398 1-.996 1h-2.991v2h2.99c.3 0 .6 0 .799.3.199.3.299.6.199.9l-.997 4c-.1.5-.499.8-.997.8h-1.994v7c0 .6-.399 1-.997 1H9.988c-.598 0-.997-.4-.997-1v-7H6.997C6.399 15 6 14.6 6 14v-4c0-.6.399-1 .997-1h1.994V7c0-3.3 2.692-6 5.982-6h2.99c.6 0 .998.4.998 1v4zm-2.292 5h-2.692c-.598 0-.997-.4-.997-1V7c0-1.1.897-2 1.994-2h1.994V3h-1.994c-2.194 0-3.988 1.8-3.988 4v3c0 .6-.399 1-.997 1H7.994v2h1.994c.598 0 .997.4.997 1v7h1.994v-7c0-.6.399-1 .997-1h2.193l.499-2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#facebook_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFacebook;
