import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ResizeOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="304 96 416 96 416 208"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="405.77"
        y1="106.2"
        x2="111.98"
        y2="400.02"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="208 416 96 416 96 304"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});