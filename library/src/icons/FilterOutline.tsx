import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FilterOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="32"
        y1="144"
        x2="480"
        y2="144"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="112"
        y1="256"
        x2="400"
        y2="256"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="208"
        y1="368"
        x2="304"
        y2="368"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});