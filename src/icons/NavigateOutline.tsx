import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const NavigateOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M448,64,64,240.14H264a8,8,0,0,1,8,8V448Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});