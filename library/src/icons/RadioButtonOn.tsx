import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const RadioButtonOn = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle cx="256" cy="256" r="144" />
    </svg>
  );
});