import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgAlbania(props: SvgProps) {
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
        fill="url(#albania_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="albania_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#albania_svg__a)">
        <Mask id="albania_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#albania_svg__b)">
          <Path fill="#EE343C" d="M-8 0h56v40H-8z" />
          <Path
            fill="#262626"
            fillRule="evenodd"
            d="M16.959 8.915a.667.667 0 00-.848-.084l-2.53 1.71a.667.667 0 00.071 1.146l3.863 1.957a.667.667 0 01.365.595v1.577a.667.667 0 01-.667.667H15.42a.667.667 0 01-.3-.072l-4.664-2.362a.667.667 0 00-.776.126l-1.636 1.658a.667.667 0 00.173 1.063l3.413 1.729c.454.23.493.862.072 1.147L10.029 20.9a.667.667 0 00.24 1.206l3.547.718a.667.667 0 01.27 1.185l-2.49 1.891c-.508.387-.234 1.198.404 1.198h.557a.67.67 0 00.164-.02l3.494-.886a.667.667 0 01.721 1.013l-.996 1.514a.667.667 0 00.557 1.033h2.21c.288 0 .544.185.634.458l.525 1.598c.201.611 1.066.611 1.267 0l.526-1.598a.667.667 0 01.633-.458h2.21c.531 0 .849-.59.557-1.033l-.996-1.514a.667.667 0 01.72-1.012l3.495.885a.67.67 0 00.164.02h.557c.639 0 .912-.811.404-1.198l-2.49-1.891a.667.667 0 01.27-1.185l3.547-.718a.667.667 0 00.24-1.206L29.3 19.77a.667.667 0 01.072-1.146l3.412-1.73a.667.667 0 00.173-1.062l-1.636-1.658a.667.667 0 00-.776-.126l-4.663 2.362a.667.667 0 01-.301.072h-1.794a.667.667 0 01-.667-.667V14.24c0-.252.141-.481.365-.595l3.863-1.957a.666.666 0 00.072-1.147l-2.531-1.71a.667.667 0 00-.848.085l-3.066 3.106a.667.667 0 01-.949 0L16.96 8.915z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="albania_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#albania_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAlbania;
