import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import MyPic from "../assets/Mypics.jpg";
import WinIcon from "../assets/win.png";
export default function () {
  return (
    <>
      <div className="mt-4">
        <div className="h-auto w-137.5 bg-[#ffffff]  mx-4 my-10 rounded-3xl px-4 pb-4">
          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className=" flex font-[Inter,Poppins,sans-serif] text-[12px] text-[#38B1A1]">
                STACKOVERFLOW
                <span className="px-1.5">.</span>
                <p className="text-[14px] font-semibold text-black font-[Inter,Poppins,sans-serif]">
                  StackOverflow Summary{" "}
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
            <div>
              <p className="text-[14px] font-[Inter,Poppins,sans-serif]">
                Syed-Saad1
              </p>
              <p className="text-[12px] font-normal text-[#999999] font-[Inter,Poppins,sans-serif]">
                {" "}
                Reputation :803834
              </p>
            </div>
          </div>
          <div className="mt-6 px-3 flex gap-26">
            <div>
              <p className="text-[24px] font-[JetBrains Mono, monospace]"></p>
              <p className="text-[#cacaca] text-[14px] font-[Inter,Poppins,sans-serif]">
                Answers
              </p>
            </div>
            <div>
              <p className="text-[24px] font-[JetBrains Mono, monospace]"></p>
              <p className="text-[#cacaca] text-[14px] font-[Inter,Poppins,sans-serif]">
                Questions
              </p>
            </div>
            <div>
              <p className="text-[24px] font-[JetBrains Mono, monospace]">
                427828
              </p>
              <p className="text-[#cacaca] text-[12px] font-[Inter,Poppins,sans-serif]">
                REP
              </p>
            </div>
          </div>
          <div className="mt-4 px-2 ">
            <div className="flex items-center gap-3">
              <img src={WinIcon} alt="" />
              <div className="flex gap-1">
                {" "}
                <span className="text-[#FBD014] font-bold font-[JetBrains Mono,monospace] text-[14px]">
                  .103
                </span>
                <span className="text-[#AF99A1] font-bold font-[JetBrains Mono,monospace] text-[14px]">
                  .686
                </span>
                <span className="text-[#B8732E] font-bold font-[JetBrains Mono,monospace] text-[14px]">
                  .751
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
