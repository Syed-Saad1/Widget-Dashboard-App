import React from "react";

import { CiSettings } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import HeartIcon from "../assets/heart.png";
import ClockIcon from "../assets/clock-three.png";
import MessageIcon from "../assets/message-circle-refresh.png";
export default function ({ data, onDelete }) {
  return (
    <>
      <div className="mt-4 bg-black/40" />{" "}
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
          <div className="flex items-center gap-3">
            <p className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md">
              <LuRefreshCw className="h-4.5" />
            </p>
            <p className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md">
              <CiSettings />
            </p>
            <button
              onClick={onDelete}
              className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md"
            >
              <RiDeleteBinLine className="h-4.5" />
            </button>
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
    </>
  );
}
