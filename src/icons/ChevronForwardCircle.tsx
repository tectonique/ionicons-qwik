import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronForwardCircle = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm257.37,0-84.68-84.69a16,16,0,0,1,22.62-22.62l96,96a16,16,0,0,1,0,22.62l-96,96a16,16,0,0,1-22.62-22.62Z" />
    </svg>
  );
});