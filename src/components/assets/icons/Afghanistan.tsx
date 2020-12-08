import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgAfganistan(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 40 40"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="url(#afganistan_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="afganistan_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#afganistan_svg__a)">
        <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        <Mask id="afganistan_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#afganistan_svg__b)">
          <Path fill="#1AB11F" d="M19 0h29v40H19z" />
          <Path fill="#262626" fillRule="evenodd" d="M-8 40h19V0H-8v40z" clipRule="evenodd" />
          <Path fill="#DC0D18" fillRule="evenodd" d="M10 40h19V0H10v40z" clipRule="evenodd" />
          <Path
            fill="#fff"
            d="M17.09 22.43l.348-.569-.347.57zm-.693 1.14l-.347.569.347-.57zm6.434-.147l.372.554-.372-.554zm-.743-1.106l.371.553-.371-.553zM15.333 18c0-.736-.597-1.333-1.333-1.333V18h1.333zm2.105 3.861c-1.242-.756-2.105-2.189-2.105-3.861H14c0 2.136 1.103 4 2.744 5l.694-1.139zm.444 1.833a1.333 1.333 0 00-.444-1.833L16.744 23l1.138.694zm-1.832.445c.629.383 1.449.184 1.832-.445L16.744 23l-.694 1.139zM12.667 18c0 2.599 1.344 4.896 3.383 6.139L16.744 23C15.104 22 14 20.136 14 18h-1.333zM14 16.667c-.736 0-1.333.597-1.333 1.333H14v-1.333zM26.333 18c0-.736-.597-1.333-1.333-1.333V18h1.333zm-3.13 5.977c1.896-1.274 3.13-3.487 3.13-5.977H25c0 2.046-1.013 3.844-2.54 4.87l.743 1.107zm-1.85-.364c.41.612 1.239.774 1.85.364l-.744-1.107-1.106.743zm.363-1.85a1.333 1.333 0 00-.363 1.85l1.106-.743-.743-1.107zM23.666 18c0 1.602-.791 2.985-1.95 3.763l.743 1.107C23.987 21.844 25 20.046 25 18h-1.333zM25 16.667c-.736 0-1.333.597-1.333 1.333H25v-1.333z"
            opacity={0.75}
          />
          <Path
            fill="#fff"
            fillOpacity={0.5}
            fillRule="evenodd"
            d="M19.5 21c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="afganistan_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#afganistan_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAfganistan;
