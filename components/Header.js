import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Btn } from ".";

const Header = () => {
  return (
    <div className="w-full px-4 py-3 white-grained flex items-center justify-between flex-col lg:flex-row xl:flex-row">
      <h1 className="text-3xl font-bold d-4 mt-[-15px] px-1">Moodly</h1>
      <div className="flex items-center">
        <Btn href="https://twitter.com/saviomartin7">
          <div className="px-3 py-[7px] bg-white item border border-[#ccc] rounded-md flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/saviomartin?s=30"
              alt="Savio"
              className="rounded-full border-2 border-[#1DA1F2] p-[2px]"
            />
            <div className="ml-2 flex items-start justify-center flex-col w-full">
              <h3 className="font-bold capitalize text-sm">By Savio Martin</h3>
              <p className="text-[10px] font-medium flex items-center text-[#1DA1F2]">
                Follow on Twitter
                <FaTwitter className="ml-1" />
              </p>
            </div>
          </div>
        </Btn>
        <Btn className="!ml-2">
          <a href="https://www.buymeacoffee.com/saviomartin" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="h-[50px]"
            />
          </a>
        </Btn>
      </div>
    </div>
  );
};

export default Header;
