import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronBackSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="328 112 184 256 328 400"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
      />
    </svg>
  );
});