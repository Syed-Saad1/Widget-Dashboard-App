import React from "react";
import { CiSettings } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import Message from "../assets/message.png";
import { FaRegMessage } from "react-icons/fa6";

export default function ({ data = {}, onDelete }) {
  console.log("DATA:", data);

  return (
    <>
      <div className="mt-4  bg-black/40" />
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
        <div key={data?.id} className="flex justify-between items-center px-2">
          <p className="text-[16px] font-medium font-[Inter,Poppins,sans-serif] text-black">
            {data?.id}
          </p>
          <span className="flex">
            <p className="font-[JetBrains Mono,monospace] text[16px] text-black font-bold">
              {data?.karma} &nbsp;
            </p>{" "}
            <p className="text-[14px] font-normal text-[#AF99A1] pt-1">
              {" "}
              KARMA
            </p>
          </span>
        </div>
        {data?.posts?.map((post) => (
          <div
            key={post.id}
            className="flex p-3 items-center hover:bg-gray-200 duration-300 h-14 w-full rounded-[10px] cursor-pointer"
          >
            <p className="text-[13px] font-medium ml-3">
              <FaRegMessage />
            </p>

            <p className="text-gray-400 text-[12px] ml-3 line-clamp-1">
              {post?.title || "No content"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
