import Image from "next/image";
import Link from "next/link";
import BackgroundDots from "./BackgroundDot";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <BackgroundDots className="absolute top-0 left-0 z-0 w-full h-full" />
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Streamline Your Train Journey Complaints </p>
          <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
                    Rail Madad's AI-powered complaint management system simplifies the process of reporting issues
                    during your train journey. Seamless transitions, multimedia support, and faster resolutions.
                  </p>
        </h1>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="" target="_blank">
            Submit a Complaint
          </Link>
        </button>
      </div>
      <div className="w-full relative">
        
      </div>
    </section>
  );
};

export default HeroSection;
