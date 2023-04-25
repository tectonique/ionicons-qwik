import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CellularOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="416"
        y="96"
        width="64"
        height="320"
        rx="8"
        ry="8"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="288"
        y="176"
        width="64"
        height="240"
        rx="8"
        ry="8"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="160"
        y="240"
        width="64"
        height="176"
        rx="8"
        ry="8"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="32"
        y="304"
        width="64"
        height="112"
        rx="8"
        ry="8"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});