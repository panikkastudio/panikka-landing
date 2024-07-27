import Image from "next/image";

import alina from "@/public/avatars/alina.png";
import osman from "@/public/avatars/osman.png";

import dreamer from "@/public/ios-apps/dreamer.png";
import neaten from "@/public/ios-apps/neaten.png";
import obscura from "@/public/ios-apps/obscura.png";
import painerly from "@/public/ios-apps/painterly.png";
import paraphraser from "@/public/ios-apps/paraphraser.png";
import reverser from "@/public/ios-apps/reverser.png";
import roamlog from "@/public/ios-apps/roamlog.png";
import rszr from "@/public/ios-apps/rszr.png";
import waifu from "@/public/ios-apps/waifu.png";

import { PrimaryButton } from "@/components/button";
import { Magicshorts, Vizco, Vuescout, AppImage, AppStore } from "@/components/case-studies";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col z-10 w-full max-w-screen-sm mx-6 justify-between lg:flex space-y-8 p-4 ">
                <div className="py-16 space-y-4">
                    <h1 className="sm:text-[52px] text-3xl leading-tight tracking-tight font-black font-inter mb-6">
                        closing <span className="text-primary font-bold">{"{braces}"}</span> until they do cool things.
                    </h1>
                    <a href="https://cal.com/osmanmesutozcan/discovery" target="_blank">
                        <PrimaryButton>Book a call</PrimaryButton>
                    </a>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center">
                        <Image src={osman} alt="Osman" width={48} height={48} className="rounded-full" />
                        <Image src={alina} alt="Alina" width={50} height={50} className="rounded-full -ml-2" />
                    </div>

                    <p>Hi, Osman and Alina here.</p>
                    <p>
                        We&apos;re two software developers with 7+ years under our belts. Our thing? Turning cool ideas into real products. We cut
                        through the fluff and get your project out there quickly, so you can start making waves on the internet.
                    </p>
                </div>
            </div>

            <div className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-5 gap-3 p-2 mt-20 pointer-events-none">
                <Magicshorts />
                <Vuescout />
                <AppImage src={roamlog} alt="Roamlog - Country Tracker" appName="roamlog" />
                <AppImage src={paraphraser} alt="Paraphraser - Reword Tool" appName="paraphraser" />
                <AppImage src={reverser} alt="Reverser - Reverse Video" appName="reverser" className="hidden" />
                <AppStore />
                <Vizco />

                <div className="grid grid-cols-subgrid col-span-2 sm:col-span-3 w-full h-full gap-3">
                    <AppImage src={waifu} alt="Waifu - AI Anime Girlfriend" appName="waifu" />
                    <AppImage src={neaten} alt="Neaten - Photo Gallery Cleaner" appName="neaten" />
                    <AppImage src={rszr} alt="Rszr - Resize Images" appName="rszr" />
                    <AppImage src={obscura} alt="Obscura - Tracing Projector" appName="obscura" />
                    <AppImage src={painerly} alt="Painerly - Realtime AI Drwing" appName="painerly" />
                    <AppImage src={dreamer} alt="Dreamer - Dream Interpretation" appName="dreamer" />
                </div>
            </div>

            <div className="w-full max-w-screen-sm space-y-[50px] p-4 my-16 sm:my-24 decoration-[0.5px] underline-offset-[3px]">
                <div className="space-y-5">
                    <h2 className="font-bold text-[17px]">Our offer</h2>
                    <p>
                        Each product is technically challenging in a unique way. We figure those out for you, so you can focus on your business
                        instead.
                    </p>

                    <div className="flex flex-wrap justify-start gap-4 max-w-[470px]">
                        {[
                            "Hard-working backends",
                            "Thoughtful frontends",
                            "Native mobile apps",
                            "Made by professionals",
                            "100% Satisfaction",
                            "Warranty after delivery",
                        ].map((item, index) => (
                            <div key={`offer_${item}`} className="flex items-center gap-x-1 font-light">
                                <div className="border border-[#D9700F] bg-[#D9700F] bg-opacity-25 w-6 h-6 rounded-lg" />
                                <span className="text-gray-500 text-[13px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-5">
                    <h2 className="font-bold text-[17px]">What’s next.</h2>
                    <p>
                        First we are going to have a 30 minutes discovery call. Make sure to jot down some of your ideas and inspirations before the
                        meeting so we can make the most of your time.
                    </p>
                    <p>
                        After our call, We are going to send a project breakdown and our quote for the project. We are very transparent with our
                        prices. No hourlies, no hidden costs.
                    </p>
                </div>

                <div className="space-y-5">
                    <h2 className="font-bold text-[17px]">How it’s done.</h2>
                    <p>
                        Once aligned on the project goals, we start with breaking down the requirements and coming up with a timeline for each
                        milestone.
                    </p>
                    <p>
                        You’ll be invited to a project channel to where we keep you up to date in each step of the process, keeping you in the loop at
                        all times.
                    </p>
                </div>

                <div className="space-y-5">
                    <h2 className="font-bold text-[17px]">After delivery.</h2>
                    <p>
                        At the end of each project we have a feedback & polish period. This is when we collect your feedback, implement touch ups, and
                        wrap up the project.
                    </p>
                    <p>
                        No project is a straight line from 0 to 1. We would be happy to assist you in keeping your product up to date in the long term
                        if needed.
                    </p>
                </div>

                <div className="border-[0.5px] border-zinc-200" />

                <div className="space-y-3.5">
                    <p>Good job.</p>
                    <div className="flex font-bold">
                        <a href="https://www.linkedin.com/in/cordell-hardy/" className="underline decoration-1">
                            Cordell Hardy,
                        </a>
                        <span className="ml-1">3M</span>
                    </div>
                </div>

                <div className="space-y-3.5">
                    <p>
                        Did a fantastic job as part of a team we hired to complete a machine learning/AI project. They were extremely professional and
                        completed all assignments on time and with a focus on quality.
                    </p>
                    <div className="flex font-bold">
                        <a href="https://www.linkedin.com/in/sinitsin/" className="underline decoration-1">
                            Oleg Sinitsin,
                        </a>
                        <span className="ml-1">Dynamite Analytics</span>
                    </div>
                </div>

                <div className="space-y-3.5">
                    <p>
                        Very talented architect and BE. He has led the development of our MVP and delivered his part within proposed billable hours.
                        He is highly responsible. I&apos;m very grateful for having him in this project and would highly recommend him for any startup
                        team.
                    </p>
                    <div className="flex font-bold">
                        <a href="https://www.linkedin.com/in/eric-zhang-singapore/" className="underline decoration-1">
                            Eric Zhang,
                        </a>
                        <span className="ml-1">ClassAir</span>
                    </div>
                </div>

                <div className="space-y-3.5">
                    <p>
                        Osman is an amazing full stack developer. He is very detailed oriented and implements solutions both quickly and effectively.
                        I think he&apos;s probably one of the most senior developers our team has ever had the honor of working with...
                    </p>
                    <div className="flex font-bold">
                        <a href="https://www.linkedin.com/in/ricky-ho-a25a05104/" className="underline decoration-1">
                            Ricky Ho,
                        </a>
                        <span className="ml-1">Treelab</span>
                    </div>
                </div>

                <div className="border-[0.5px] border-zinc-200" />

                <p>
                    Thank you all, <br />
                    Osman & Alina
                </p>
            </div>
        </main>
    );
}
