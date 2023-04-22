import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PodiumSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="160" y="32" width="192" height="448" />
      <rect x="384" y="192" width="112" height="288" />
      <rect x="16" y="128" width="112" height="352" />
    </svg>
  );
});