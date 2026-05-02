import React from "react";
import { CiSettings } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import MyPic from "../assets/Mypics.jpg";
import { useWidgetContext } from "../hooks/usewidgetContext";

export default function ({ data, index }) {
  const { handleDelete } = useWidgetContext();
  return (
    <>
      <div className="  bg-black/40 " />
      <div className="h-55.75 w-107.25 bg-[#ffffff]  rounded-3xl px-4">
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
            <p className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md">
              <LuRefreshCw className="h-4.5" />
            </p>
            <p className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md">
              <CiSettings />
            </p>
            <button
              onClick={() => handleDelete(index)}
              className="text-[20px] hover:bg-[#47dbc8] p-1 rounded-md"
            >
              <RiDeleteBinLine className="h-4.5" />
            </button>
          </div>
        </div>
        <hr className="text-[#DCD1D5] pt-3" />
        <div className="flex justify-baseline gap-2 items-center mt-2">
          <img
            className="h-12 w-12 rounded-full"
            src={data?.avatar_url}
            alt=""
          />
          <p className="text-[14px] font-[Inter,Poppins,sans-serif]">
            {data?.name}
          </p>
        </div>
        <div className="flex gap-6 mt-5">
          <div>
            <p className="font-[JetBrains Mono,monospace] text-[24px] font-semibold">
              {data?.public_repos}
            </p>
            <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
              REPOS
            </p>
          </div>
          <div>
            <p className="font-[JetBrains Mono,monospace] text-[24px] font-semibold">
              {data?.followers}
            </p>
            <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
              FOLLOWERS
            </p>
          </div>
          <div>
            <p className="font-[JetBrains Mono,monospace] text-[24px] font-semibold">
              {data?.following}
            </p>
            <p className="text-[#AF99A1] text-[12px] font-[Inter,Poppins,sans-serif]">
              FOLLOWING
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
