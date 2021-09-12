import React from "react";
import sounds from "../components/sounds";
import { Adjuster, Btn, Header, Main } from "../components";

const index = () => {
  return (
    <div className="grained-bg h-full w-full min-h-screen text-[#111]">
      <Header />
      <div className="w-full flex justify-center mt-[60px]">
        <div className="p-3 w-full lg:w-[80%] xl:w-[80%] md:w-[80%]">
          <Adjuster />
          <Main sounds={sounds} />
        </div>
      </div>
      <div className="w-full p-4 white-grained mt-[60px] flex items-center justify-center flex-col">
        <h2 className="text-xl">
          Made by{" "}
          <a
            href="https://twitter.com/saviomartin7"
            target="_blank"
            className="continuous-3 font-bold text-[#5363BB]"
          >
            @saviomartin7
          </a>
        </h2>

        <div className="flex items-center justify-center mt-5 flex-col">
          <h3 className="font-bold">Sponsor</h3>

          <Btn href="https://devdojo.com/">
            <img
              src="https://laravelnews.imgix.net/partners/devdojo-logo-400x100.png"
              alt="DevDojo"
              className="h-[45px]"
            />
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default index;
