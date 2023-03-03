import illustrationWorking from "../assets/illustration-working.svg";

function Hero() {
  return (
    <section className="flex flex-col pb-24">
      <div className="overflow-hidden">
        <div className="pl-8 mr-[-40%]">
          <img src={illustrationWorking} alt="" className="" />
        </div>
      </div>
      <section className="py-10 flex flex-col items-center">
        <h2 className="font-bold text-4xl text-center">
          More than just shorter links
        </h2>
        <p className="text-gray-400 text-center px-10 py-5 text-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-[hsl(180,66%,49%)] text-white text-lg font-bold px-9 py-3 rounded-3xl">
          Get Started
        </button>
      </section>
    </section>
  );
}

export default Hero;
