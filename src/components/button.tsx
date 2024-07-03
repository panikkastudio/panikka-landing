import { ButtonHTMLAttributes } from "react";

export function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="bg-black rounded-3xl px-4 py-1.5 text-white">
      {props.children}
    </button>
  );
}
