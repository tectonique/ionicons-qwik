import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CloseCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="320"
        y1="320"
        x2="192"
        y2="192"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="192"
        y1="320"
        x2="320"
        y2="192"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});