import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronForward = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="184 112 328 256 184 400"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
      />
    </svg>
  );
});