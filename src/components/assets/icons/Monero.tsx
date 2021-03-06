import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMonero(props: SvgProps) {
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
        fill="#0D1F3C"
        fillRule="evenodd"
        d="M9.325 10.836c.864.862 1.73 1.726 2.6 2.597l1.94-1.937c1.932-1.93 3.857-3.85 5.781-5.803v9.972h3.349c.168 0 .223-.056.28-.204.558-1.861.706-3.74.353-5.656-.521-2.828-1.86-5.191-4.075-7.014C16.651.39 13.303-.465 9.62.24c-2.791.54-5.08 1.936-6.884 4.112C1.098 6.307.223 8.577.037 11.107c-.111 1.507.075 2.958.502 4.39.038.15.112.187.26.187h3.145a.7.7 0 00.084-.008c.04-.005.087-.01.14-.01V5.673c1.721 1.735 3.435 3.444 5.157 5.162zm-2.59 7.248H1.749c1.823 3.181 6.083 6.288 11.572 5.637a11.526 11.526 0 005.005-1.805c1.544-.986 2.772-2.27 3.758-3.85H17.06v-6.27c-.865.865-1.725 1.72-2.586 2.576-.86.856-1.72 1.712-2.586 2.577l-5.153-5.154v6.289z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgMonero;
