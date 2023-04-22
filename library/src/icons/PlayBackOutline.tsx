import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PlayBackOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M480,145.52v221c0,13.28-13,21.72-23.63,15.35L267.5,268.8c-9.24-5.53-9.24-20.07,0-25.6l188.87-113C467,123.8,480,132.24,480,145.52Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M251.43,145.52v221c0,13.28-13,21.72-23.63,15.35L38.93,268.8c-9.24-5.53-9.24-20.07,0-25.6l188.87-113C238.44,123.8,251.43,132.24,251.43,145.52Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});