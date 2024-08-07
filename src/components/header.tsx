import Image from "next/image";

// @ts-ignore
import logo from "@/public/logo.png";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-between items-center max-w-screen-sm mx-auto my-8 p-4">
            <Link href="/">
                <Image src={logo} alt="Panikka Studio" className="w-9 h-9" />
            </Link>

            <div className="flex items-center space-x-3 font-light">
                <a href="mailto:hi@panikka.studio" className="text-sm text-link">
                    hi@panikka.studio
                </a>
                <Status />
            </div>
        </header>
    );
}

export function Status() {
    const isOpenToWork = true;

    return (
        <>
            {isOpenToWork && (
                <div className="flex items-center space-x-1.5 px-2 py-[1px] rounded-[10px] border border-secondary bg-secondary/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary drop-shadow-glow" />
                    <span className="text-xs text-secondary">open</span>
                </div>
            )}
        </>
    );
}
