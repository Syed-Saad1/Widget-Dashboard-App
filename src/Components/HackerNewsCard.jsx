import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import Message from "../assets/message.png";
export default function ({ data }) {
  const Hacker = data?.items?.[0];

  return (
    <>
      <div className="mt-4">
        <div className="h-auto w-121 bg-[#ffffff] mx-4 my-10 rounded-3xl px-4 pb-4">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className=" flex font-[Inter,Poppins,sans-serif] text-[12px] text-[#38B1A1]">
                HACKERNEWS
                <span className="px-1.5">.</span>
                <p className="text-[14px] font-semibold text-black font-[Inter,Poppins,sans-serif]">
                  HackerNews Activity{" "}
                </p>
              </h2>
            </div>
            <div className="flex gap-3">
              <img
                className="h-6 w-6 hover:bg-[#38B1A1] p-1 rounded-md"
                src={RefreshIcon}
                alt=""
              />
              <img
                className="h-6 w-6 hover:bg-[#38B1A1] p-1 rounded-md"
                src={SettingIcon}
                alt=""
              />
              <img
                className="h-6 w-6 hover:bg-[#38B1A1] p-1 rounded-md"
                src={DeleteIcon}
                alt=""
              />
            </div>
          </div>
          <hr className="text-[#DCD1D5] pt-3" />

          <div
            key={Hacker?.id}
            className="flex justify-between items-center px-2"
          >
            <p className="text-[16px] font-medium font-[Inter,Poppins,sans-serif] text-black">
              {Hacker?.id}
            </p>
            <span className="flex">
              <p className="font-[JetBrains Mono,monospace] text[16px] text-black font-bold">
                {Hacker?.karma} &nbsp;
              </p>{" "}
              <p className="text-[14px] font-normal text-[#AF99A1] pt-1">
                {" "}
                KARMA
              </p>
            </span>
          </div>

          <div className="mt-4">
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                {Hacker?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
