import React from "react";
import { CiSettings } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import StarIcon from "../assets/star.png";
import ForkIcon from "../assets/code-fork.png";

export default function ({ data, onDelete }) {
  const handleClick = (repo) => {
    window.open(repo.html_url, "_blank");
  };
  return (
    <>
      <div className="mt-4  bg-black/40 " />
      <div className="h-auto w-125 bg-[#ffffff] mx-4 my-10 rounded-3xl px-4 pb-4">
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

        <div className="mt-4">
          {data?.map((repo) => (
            <div
              key={repo.id}
              onClick={() => handleClick(repo)}
              className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2"
            >
              <div>
                <p className="text-[14px] text-black font-semibold font-[Inter,Poppins,sans-serif]">
                  {repo.name}
                </p>
                <p className="text-[12px] text-[#38B1A1] font-medium font-[Inter,Poppins,sans-serif]">
                  {repo.language}
                </p>
              </div>
              <div className=" flex items-center gap-3.5">
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img src={StarIcon} alt="" />
                  {repo.stargazers_count}
                </span>
                <span className="flex gap-2.5 items-center text-[12px]">
                  <img className="h-3 w-3" src={ForkIcon} alt="" />{" "}
                  {repo.forks_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
