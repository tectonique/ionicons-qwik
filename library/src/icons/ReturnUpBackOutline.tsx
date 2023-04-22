import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReturnUpBackOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="112 160 48 224 112 288"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M64,224H358c58.76,0,106,49.33,106,108v20"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});