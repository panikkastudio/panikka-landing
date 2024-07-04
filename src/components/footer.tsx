import { PrimaryButton } from "./button";
import { Status } from "./header";

export function Footer() {
  return (
    <footer className="relative h-40 sm:h-64 overflow-hidden">
      <div className=" max-w-screen-sm mx-auto mt-8 md:pb-20 flex justify-between items-center my-8 p-4">
        <a href="https://cal.com/osmanmesutozcan/discovery">
          <PrimaryButton>Book a call</PrimaryButton>
        </a>

        <div className="flex items-center space-x-3 font-light">
          <a
            href="https://www.upwork.com/freelancers/~01b5fb0ecf819eae23"
            className="text-sm text-link"
          >
            upwork
          </a>
          <span className="h-1.5 w-1.5 rounded-full bg-[#ACACAC]" />
          <a href="mailto:hi@panikka.studio" className="text-sm text-link">
            hi@panikka.studio
          </a>
          <Status />
        </div>
      </div>

      <span className="absolute text-5xl sm:text-8xl lg:text-[144px] font-black transform -translate-x-1/2 left-1/2 -bottom-2 sm:-bottom-5 lg:-bottom-[40px] text-[#F3F3F3] font-inter">
        panikka.studio
      </span>
    </footer>
  );
}
