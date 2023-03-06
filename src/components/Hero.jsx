import illustrationWorking from "../assets/illustration-working.svg";

function Hero() {
  return (
    <section className="flex flex-col pb-24 lg:flex-row-reverse lg:items-center lg:pl-8 lg:pt-12 max-w-[1440px]">
      <div className="overflow-hidden">
        <div className="pl-8 mr-[-40%]">
          <img src={illustrationWorking} alt="" className="" />
        </div>
      </div>
      <section className="py-10 px-4 flex flex-col items-center lg:items-start lg:px-0">
        <h2 className="font-bold text-4xl text-center lg:text-6xl lg:text-left">
          More than just shorter links
        </h2>
        <p className="text-gray-400 text-center px-10 py-5 text-lg lg:px-0 lg:text-base lg:text-left lg:max-w-[400px]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-[hsl(180,66%,49%)] text-white text-lg font-bold px-9 py-2 rounded-3xl hover:opacity-50">
          Get Started
        </button>
      </section>
    </section>
  );
}

export default Hero;
