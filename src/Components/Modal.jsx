import React from "react";
import CloseIcon from "../assets/close.png";
export default function Modal({
  onClose,
  onGithub,
  onGithubRepos,
  onDevArticles,
  onStackFlow,
  onHackerNews,
}) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 inset-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/10 "
      >
        <div className="h-116 w-120.25 bg-[#ffffff] shadow-2xl rounded-2xl px-4 py-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex justify-between items-center m-2"
          >
            <h1 className="text-[20px] font-medium text-black">Add Widget</h1>
            <img
              onClick={onClose}
              className="h-4 w-4 cursor-pointer"
              src={CloseIcon}
              alt=""
            />
          </div>

          <div>
            <h2 className="px-2 text-[#38b1a1] font-[Inter,Poppins,sans-serif] text-[13px] font-bold">
              GITHUB
            </h2>

            <div
              onClick={onGithub}
              className="h-16 w-100 max-w-md hover:bg-[#f5f5f5] rounded-lg mx-3 py-2 px-2 cursor-pointer"
            >
              <h3 className="px-1 text-[13px] pt-1 font-[Inter,Poppins,sans-serif] text-black font-normal hover:text-[#38b1a1]">
                Github Profile
              </h3>
              <p className="px-1 pb-1 text-[12px] font-[Inter,Poppins,sans-serif] text-[#AF99A1]">
                User Stats:repos, followers,gists
              </p>
            </div>

            <div
              onClick={onGithubRepos}
              className="h-16 w-md hover:bg-[#f5f5f5] rounded-lg mx-3 py-2 px-2 cursor-pointer"
            >
              <h3 className="px-1 text-[13px] font-[Inter,Poppins,sans-serif]  text-black font-medium hover:text-[#38b1a1]">
                Github Repos
              </h3>
              <p className="px-1 pb-1 text-[12px] font-[Inter,Poppins,sans-serif] text-[#AF99A1]">
                Repository:List with stars and forks
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-2 text-[#38b1a1] font-[Inter,Poppins,sans-serif] text-[13px] font-bold">
              DEV.TO
            </h2>

            <div
              onClick={onDevArticles}
              className="h-16 w-md hover:bg-[#f5f5f5] rounded-lg mx-3 py-2 px-2 cursor-pointer"
            >
              <h3 className="pt-1 px-1 text-[13px] font-[Inter,Poppins,sans-serif] text-black font-medium hover:text-[#38b1a1]">
                Dev.To Articles
              </h3>
              <p className="pb-2 px-1 text-[12px] font-[Inter,Poppins,sans-serif] text-[#AF99A1]">
                Latest articles with reaction and comments
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-2 text-[#38b1a1] font-[Inter,Poppins,sans-serif] text-[13px] font-bold">
              STACK OVERFLOW
            </h2>

            <div
              onClick={onStackFlow}
              className="h-16 w-md hover:bg-[#f5f5f5] rounded-lg mx-3 py-2 px-2 cursor-pointer"
            >
              <h3 className="pt-1 px-1 text-[13px] font-[Inter,Poppins,sans-serif] text-black font-medium hover:text-[#38b1a1]">
                StackOverflow Summary
              </h3>
              <p className="pb-2 px-1 text-[12px] font-[Inter,Poppins,sans-serif] text-[#AF99A1]">
                User stats,reputation,and badges
              </p>
            </div>
          </div>

          <div>
            <h2 className="px-2 text-[#38b1a1] font-[Inter,Poppins,sans-serif] text-[13px] font-bold">
              HACKER NEWS
            </h2>

            <div
              onClick={onHackerNews}
              className="h-16 w-md hover:bg-[#f5f5f5] rounded-lg mx-3 py-2 px-2 cursor-pointer"
            >
              <h3 className="px-1 pt-1 text-[13px] font-[Inter,Poppins,sans-serif] text-black font-medium hover:text-[#38b1a1]">
                Hacker News Activity
              </h3>
              <p className="pb-2 px-1 text-[12px] font-[Inter,Poppins,sans-serif] text-[#AF99A1]">
                Recent submission and karma
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
