import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Square = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416,464H96a48.05,48.05,0,0,1-48-48V96A48.05,48.05,0,0,1,96,48H416a48.05,48.05,0,0,1,48,48V416A48.05,48.05,0,0,1,416,464Z" />
    </svg>
  );
});