import React from "react";
import { Btn } from ".";
import { FiPause, FiPlay, FiShuffle } from "react-icons/fi";
import toast from "react-hot-toast";
import sounds from "./sounds";

const Adjuster = () => {
  const playButton = (data) => {
    data.forEach(async (name) => {
      let audio = document.getElementById(name);
      const slider = document.querySelector(`.${name}-slider`);
      const gradientDiv = document.querySelector(`.${name}-div`);

      await stopAllSounds();

      if (audio.paused) {
        toast.loading(`Loading ${name} 🎵`); /// loading state

        audio.play();
        gradientDiv.classList.add("gradient-animated");
        slider.style.opacity = 1;

        setTimeout(() => {
          toast.remove();
        }, [1000]);
      } else {
        audio.pause();
        setTimeout(() => {
          toast.remove();
        }, [1000]);

        gradientDiv.classList.remove("gradient-animated");
        slider.style.opacity = 0;
      }
    });
  };

  const stopAllSounds = () => {
    sounds.forEach((sound) => {
      let audio = document.getElementById(sound.name);
      const slider = document.querySelector(`.${sound.name}-slider`);
      const gradientDiv = document.querySelector(`.${sound.name}-div`);

      if (!audio.paused) {
        audio.pause();
        gradientDiv.classList.remove("gradient-animated");
        slider.style.opacity = 0;
      }
    });
  };

  let modes = [
    {
      name: "Productivity",
      onClick: () => {
        playButton(["rowing", "campfire", "library", "fan"]);
      },
    },
    {
      name: "Focus",
      onClick: () => {
        playButton(["birds", "wind", "farm"]);
      },
    },
    {
      name: "Relax",
      onClick: () => {
        playButton(["leaves", "train", "library"]);
      },
    },
  ];

  const get_random = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const shuffle = () => {
    let sound1 = get_random(sounds).name;
    let sound2 = get_random(sounds).name;
    let sound3 = get_random(sounds).name;

    playButton([sound1, sound2, sound3]);
  };
  return (
    <div className="w-full lg:w-[90%] xl:w-[90%] ml-0 lg:ml-[5%] xl:ml-[5%] flex justify-center lg:justify-between xl:justify-between items-center">
      <div className="flex items-center">
        {modes.map((item, index) => (
          <Btn
            className="!rounded-[14px] !mx-1 item"
            key={index}
            onClick={item.onClick}
          >
            <div className="white-grained px-4 py-2 border border-[#3F51B5] rounded-[14px] flex items-center">
              <h3 className="capitalize text-lg font-normal text-[#3F51B5]">
                {item.name}
              </h3>
            </div>
          </Btn>
        ))}
      </div>
      <div className="flex items-center">
        <Btn className="!rounded-full item !mx-1" onClick={shuffle}>
          <div className="white-grained p-4 rounded-full border border-[#3F51B5] flex items-center">
            <h3 className="capitalize text-lg">
              <FiShuffle className="text-[#3F51B5]" />
            </h3>
          </div>
        </Btn>
      </div>
    </div>
  );
};

export default Adjuster;
