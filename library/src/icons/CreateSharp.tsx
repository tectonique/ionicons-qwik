import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CreateSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464.37,49.2a22.07,22.07,0,0,0-31.88-.76L414.18,66.69l31.18,31.1,18-17.91A22.16,22.16,0,0,0,464.37,49.2Z" />
      <polygon points="252.76 336 239.49 336 208 336 176 336 176 304 176 272.51 176 259.24 185.4 249.86 323.54 112 48 112 48 464 400 464 400 188.46 262.14 326.6 252.76 336" />
      <polygon points="400 143.16 432.79 110.3 401.7 79.21 368.85 112 400 112 400 143.16" />
      <polygon points="208 304 239.49 304 400 143.16 400 112 368.85 112 208 272.51 208 304" />
    </svg>
  );
});