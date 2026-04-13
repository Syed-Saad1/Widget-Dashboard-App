import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import MyPic from "../assets/Mypics.jpg";
export default function () {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 ">
        <div className="h-55.75 w-107.25 bg-[#ffffff] shadow-2xl rounded-3xl px-3 py-3">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className=" flex font-[Inter,Poppins,sans-serif] text-[12px] text-[#38B1A1]">
                GITHUB <span className="px-1.5">.</span>
                <p className="text-[14px] font-semibold text-black font-[Inter,Poppins,sans-serif]">
                  GitHub Profile
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
          <div className="flex justify-baseline gap-2 items-center mt-2">
            <img className="h-12 w-12 rounded-full" src={MyPic} alt="" />
            <p className="text-[14px] font-[Inter,Poppins,sans-serif]">
              Syed-Saad1
            </p>
          </div>
          <div className="flex gap-6 mt-3">
            <div>
              <p className="font-[JetBrains Mono,monospace] text-[24px]">46</p>
              <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
                REPOS
              </p>
            </div>
            <div>
              <p className="font-[JetBrains Mono,monospace] text-[24px]">1</p>
              <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
                FOLLOWERS
              </p>
            </div>
            <div>
              <p className="font-[JetBrains Mono,monospace] text-[24px]">0</p>
              <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
                FOLLOWING
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
