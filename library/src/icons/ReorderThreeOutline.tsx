import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderThreeOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="96"
        y1="256"
        x2="416"
        y2="256"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="96"
        y1="176"
        x2="416"
        y2="176"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="96"
        y1="336"
        x2="416"
        y2="336"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});