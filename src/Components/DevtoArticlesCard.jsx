import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import HeartIcon from "../assets/heart.png";
import ClockIcon from "../assets/clock-three.png";
import MessageIcon from "../assets/message-circle-refresh.png";
export default function ({ data }) {
  return (
    <>
      <div className="mt-4">
        {" "}
        <div className="h-auto w-125 bg-[#ffffff]  mx-4 my-10 rounded-3xl px-4 pb-4">
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
            {data?.map((dev) => (
              <div key={dev.id} className="pb-6">
                <p className="text-[16px] font-medium text-black font-[Inter,Poppins,sans-serif]">
                  {dev.description}
                </p>
                <div className="mt-1 flex gap-2">
                  <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                    <img className="w-3 h-3" src={HeartIcon} alt="" />
                    {dev.public_reactions_count}
                  </span>
                  <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                    <img className="w-3 h-3" src={MessageIcon} alt="" />
                    {dev.comments_count}
                  </span>
                  <span className="flex gap-1 text-[#AF99A1] items-center text-[12px]">
                    <img className="w-3 h-3" src={ClockIcon} alt="" />
                    {dev.published_at}{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
