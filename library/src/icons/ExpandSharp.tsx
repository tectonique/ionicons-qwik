import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ExpandSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="432 320 432 432 320 432"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="421.8"
        y1="421.77"
        x2="304"
        y2="304"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="80 192 80 80 192 80"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="90.2"
        y1="90.23"
        x2="208"
        y2="208"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="320 80 432 80 432 192"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="421.77"
        y1="90.2"
        x2="304"
        y2="208"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="192 432 80 432 80 320"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="90.23"
        y1="421.8"
        x2="208"
        y2="304"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});