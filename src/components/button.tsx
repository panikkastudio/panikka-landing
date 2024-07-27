import { cn } from "@/base/cn";
import { ButtonHTMLAttributes } from "react";

export function PrimaryButton({ dark, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { dark?: boolean }) {
    return <button className={cn("bg-black rounded-3xl px-4 py-1.5 text-white", dark && "bg-white text-black")} {...props} />;
}
