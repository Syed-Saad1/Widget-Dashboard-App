import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import StarIcon from "../assets/star.png";
import ForkIcon from "../assets/code-fork.png";

export default function () {
  return (
    <>
      <div></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 ">
        <div className="h-auto w-125 bg-[#ffffff] shadow-2xl rounded-3xl px-3 py-5">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className=" flex font-[Inter,Poppins,sans-serif] text-[12px] text-[#38B1A1]">
                GITHUB <span className="px-1.5">.</span>
                <p className="text-[14px] font-semibold text-black font-[Inter,Poppins,sans-serif]">
                  GitHub Repos
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

          <div className="mt-4">
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <div>
                <p className="text-[14px] text-black font-semibold font-[Inter,Poppins,sans-serif]">
                  1st-Layout
                </p>
                <p className="text-[12px] text-[#38B1A1] font-medium font-[Inter,Poppins,sans-serif]">
                  CSS
                </p>
              </div>
              <div className=" flex items-center gap-3.5">
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img src={StarIcon} alt="" />1
                </span>
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img className="h-3 w-3" src={ForkIcon} alt="" />0
                </span>
              </div>
            </div>
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <div>
                <p className="text-[14px] text-black font-semibold font-[Inter,Poppins,sans-serif]">
                  React-learning{" "}
                </p>
                <p className="text-[12px] text-[#38B1A1] font-medium font-[Inter,Poppins,sans-serif]">
                  JS
                </p>
              </div>
              <div className=" flex items-center gap-3.5">
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img src={StarIcon} alt="" />9
                </span>
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img className="h-3 w-3" src={ForkIcon} alt="" />2
                </span>
              </div>
            </div>
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <div>
                <p className="text-[14px] text-black font-semibold font-[Inter,Poppins,sans-serif]">
                  JS-learning{" "}
                </p>
                <p className="text-[12px] text-[#38B1A1] font-medium font-[Inter,Poppins,sans-serif]">
                  JS
                </p>
              </div>
              <div className=" flex items-center gap-3.5">
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img src={StarIcon} alt="" />3
                </span>
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img className="h-3 w-3" src={ForkIcon} alt="" />1
                </span>
              </div>
            </div>
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <div>
                <p className="text-[14px] text-black font-semibold font-[Inter,Poppins,sans-serif]">
                  Python-learning{" "}
                </p>
                <p className="text-[12px] text-[#38B1A1] font-medium font-[Inter,Poppins,sans-serif]">
                  Py
                </p>
              </div>
              <div className=" flex items-center gap-3.5">
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img src={StarIcon} alt="" />4
                </span>
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img className="h-3 w-3" src={ForkIcon} alt="" />5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
