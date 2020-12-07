import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgAfganistanSm(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="url(#afganistan-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="afganistan-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#afganistan-sm_svg__a)">
        <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        <Mask
          id="afganistan-sm_svg__b"
          width={34}
          height={24}
          x={-5}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#afganistan-sm_svg__b)">
          <Path fill="#1AB11F" d="M11.4 0h17.4v24H11.4z" />
          <Path fill="#262626" fillRule="evenodd" d="M-4.8 24H6.6V0H-4.8v24z" clipRule="evenodd" />
          <Path fill="#DC0D18" fillRule="evenodd" d="M6 24h11.4V0H6v24z" clipRule="evenodd" />
          <Path
            fill="#fff"
            d="M10.393 13.23l-.347.57.347-.57zM9.7 14.37l-.347.569.347-.57zm4.148-.095l-.371-.553.371.553zm-.925-.181l-.553.372.553-.372zm.182-.925l.372.553-.372-.553zM9.734 10.8c0-.736-.598-1.333-1.334-1.333V10.8h1.333zm1.006 1.861c-.585-.356-1.007-1.043-1.007-1.861H8.4c0 1.281.662 2.4 1.646 3l.694-1.139zm.445 1.833a1.333 1.333 0 00-.445-1.832l-.694 1.138 1.139.694zm-1.833.445c.63.383 1.45.184 1.833-.445l-1.139-.694-.694 1.139zM7.067 10.8c0 1.744.902 3.296 2.285 4.139l.694-1.139c-.984-.6-1.646-1.719-1.646-3H7.067zM8.4 9.467c-.736 0-1.333.597-1.333 1.333H8.4V9.467zm7.933 1.333c0-.736-.597-1.333-1.333-1.333V10.8h1.333zm-2.114 4.029c1.285-.864 2.114-2.357 2.114-4.029H15c0 1.228-.608 2.306-1.524 2.922l.743 1.107zm-1.85-.364c.41.612 1.239.774 1.85.364l-.743-1.107-1.107.744zm.363-1.85a1.333 1.333 0 00-.363 1.85l1.107-.743-.744-1.107zm.935-1.815c0 .784-.387 1.447-.935 1.815l.744 1.107C14.392 13.106 15 12.028 15 10.8h-1.333zM15 9.467c-.736 0-1.333.597-1.333 1.333H15V9.467z"
            opacity={0.75}
          />
          <Path
            fill="#fff"
            fillOpacity={0.5}
            fillRule="evenodd"
            d="M11.7 12.6c.828 0 1.5-1.075 1.5-2.4s-.672-2.4-1.5-2.4c-.829 0-1.5 1.075-1.5 2.4s.671 2.4 1.5 2.4z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="afganistan-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#afganistan-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAfganistanSm;
