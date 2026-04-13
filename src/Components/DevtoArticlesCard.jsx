import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import HeartIcon from "../assets/heart.png";
import ClockIcon from "../assets/clock-three.png";
import MessageIcon from "../assets/message-circle-refresh.png";
export default function () {
  return (
    <>
      <div></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 ">
        <div className="h-auto w-125 bg-[#ffffff] shadow-2xl rounded-3xl px-3 py-5">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className=" flex font-[Inter,Poppins,sans-serif] text-[12px] text-[#38B1A1]">
                Dev.to <span className="px-1.5">.</span>
                <p className="text-[14px] font-semibold text-black font-[Inter,Poppins,sans-serif]">
                  Dev.to Articles{" "}
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
          <div className="mt-3 px-1">
            <div className="pb-6">
              <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                Riddle me this DEV and MLH Community
              </p>
              <div className="mt-1 flex gap-2">
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img
                    className="w-3 h-3"
                    src="./src/assets/heart.png"
                    alt=""
                  />
                  21
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img
                    className="w-3 h-3"
                    src="./src/assets/message-circle-refresh.png"
                    alt=""
                  />
                  3
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img
                    className="w-3 h-3"
                    src="./src/assets/clock-three.png"
                    alt=""
                  />
                  Apr 1
                </span>
              </div>
            </div>
            <div className="pb-6">
              <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                What is your WPM (Words per Minute)? #1
              </p>
              <div className="mt-1 flex gap-2">
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={HeartIcon} alt="" />
                  38
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={MessageIcon} alt="" />
                  54
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={ClockIcon} alt="" />
                  Mar 30
                </span>
              </div>
            </div>
            <div className="pb-6">
              <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                🗓️ Monthly Dev Report: March 2026
              </p>
              <div className="mt-1 flex gap-2">
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={HeartIcon} alt="" />
                  73
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={MessageIcon} alt="" />
                  22
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={ClockIcon} alt="" />
                  Mar 23
                </span>
              </div>
            </div>
            <div className="pb-6">
              <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                Check Up with Each Other
              </p>
              <div className="mt-1 flex gap-2">
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={HeartIcon} alt="" />
                  74
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={MessageIcon} alt="" />
                  27
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={ClockIcon} alt="" />
                  Mar 24
                </span>
              </div>
            </div>
            <div className="pb-6">
              <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                Get Started on Dev.to! A Beginner's Guide to Engage with the
                Community! 💡
              </p>
              <div className="mt-1 flex gap-2">
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={HeartIcon} alt="" />
                  142
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={MessageIcon} alt="" />
                  62
                </span>
                <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                  <img className="w-3 h-3" src={ClockIcon} alt="" />
                  Mar 20
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
