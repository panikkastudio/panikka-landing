import Image, { StaticImageData } from "next/image";

import magicshorts from "../../public/case-studies/magicshorts.png";
import vizco from "../../public/case-studies/vizco.png";
import vuescout from "../../public/case-studies/vuescout.png";

const transformClass = "transform transition duration-500 hover:scale-[1.02] hover:drop-shadow-xl ";

export function Magicshorts() {
    return (
        <div className={`group relative flex flex-col h-[280px] col-span-2 bg-primary rounded-3xl hover:cursor-alias`}>
            <div className="text-white pt-9 pb-5 px-9">
                <span>Magicshorts</span>
                <p className="font-bold text-lg">Automate Short Videos With AI</p>
            </div>
            <div className="relative ml-3 h-full">
                <Image
                    src={magicshorts}
                    alt="Magicshorts - Automate short videos with AI"
                    className="absolute h-full w-full rounded-3xl object-cover object-top"
                />
                <div className="absolute z-10 bg-gradient-to-b from-transparent via-transparent to-primary/50 h-full w-full rounded-3xl" />
            </div>
            <Overlay isLight={true} link="/use-case/magicshorts" />
        </div>
    );
}

export function Vuescout() {
    return (
        <div
            className={`relative group hidden sm:flex h-[280px] col-span-3 bg-gradient-to-r from-[#DFDDF7]/80 to-[#DAE5F1]/80 rounded-3xl p-5 px-9 hover:cursor-alias`}
        >
            <div className="flex flex-col justify-between items-start max-w-[350px] h-full">
                <div className="text-black py-3">
                    <span>Vuescout</span>
                    <p className="font-bold text-lg">Interview Candidates on Auto-Pilot</p>
                </div>
                <p>Capture authentic video responses, enhance candidate evaluation, and simplify your hiring process — all in one place.</p>
                <Image src={vuescout} alt="Vuescout - Interview Candidates on Auto-Pilot" className="w-auto h-[72px] pt-1 " />
            </div>
            <Overlay isLight={true} link="/use-case/vuescout" />
        </div>
    );
}

export function Vizco() {
    return (
        <div className={`relative group flex flex-col h-[280px] col-span-2 bg-[#CAEFFD] rounded-3xl hover:cursor-alias`}>
            <div className="text-black pt-9 px-9">
                <span>Vizco</span>
                <p className="font-bold text-lg">Online Audiogram Maker</p>
            </div>
            <div className="relative h-full">
                <Image src={vizco} alt="Vizco - Online Audiogram Maker" className="absolute h-full w-full rounded-b-3xl object-cover object-top" />
                <div className="absolute z-10 bg-gradient-to-b from-[#CAEFFD] to-transparent h-full w-full rounded-b-3xl" />
            </div>
            <Overlay isLight={true} link="/use-case/vizco" />
        </div>
    );
}

export function AppImage({ src, appName, alt, className }: { src: StaticImageData; appName: string; alt: string; className?: string }) {
    return (
        <div className={`${className} group relative sm:flex rounded-3xl w-full h-32 `}>
            <Image src={src} alt={alt} className={`w-full h-full object-cover rounded-3xl hover:cursor-alias`} />
            <Overlay isLight={false} link={`/use-case/${appName}`} />
        </div>
    );
}

export function AppStore() {
    return (
        <a
            href="https://apps.apple.com/us/developer/panikka-studio/id1701542040"
            className={`flex flex-col justify-center h-32 col-span-2 rounded-3xl p-5 px-9 bg-[url('../../public/case-studies/bg-gradient.png')] bg-cover hover:cursor-alias`}
        >
            <span>AppStore</span>
            <p className="font-bold text-lg">Discover Our Apps</p>
        </a>
    );
}

function Overlay({ isLight, link }: { isLight: boolean; link: string }) {
    return (
        <a
            href={link}
            className={`hidden group-hover:flex group-hover:cursor-pointer items-center justify-center z-20 absolute w-full h-full backdrop-blur-md inset-0 rounded-3xl text-lg font-light ${
                isLight ? "text-black" : "text-white"
            }`}
        >
            <span className="underline">See use-case</span>
            <span className="text-sm ml-1">↗</span>
        </a>
    );
}
