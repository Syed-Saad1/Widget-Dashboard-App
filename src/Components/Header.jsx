import React, { useState } from "react";
import refreshIcon from "../assets/refreshicon.png";
import AddIcon from "../assets/add.png";
import WidgetIcon from "../assets/Widget-icon.png";
import MyModal from "./Modal.jsx";
import ConfigureGitHub from "./ConfigureGitHub";
import ConfigureGitHubRepos from "./ConfigureGitHubRepos.jsx";
import ConfigureDevToArticles from "./ConfigureDev.ToArticles.jsx";
import ConfigureStackOverflowSummury from "./ConfigureStackOverflowSummury.jsx";
import ConfigureHakerNewsActivity from "./ConfigureHakerNewsActivity.jsx";
import { GethackerNews } from "../constant/apis.js";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [githubOpen, setGithubOpen] = useState(false);
  const [githubReposOpen, setGithubReposOpen] = useState(false);
  const [devArticles, setDevArticles] = useState(false);
  const [stackOverFlow, setStackOverFlow] = useState(false);
  const [hackerNews, setHackerNews] = useState(false);
  // GetgithubProfile("Syed-Saad1");
  // GetgithubRepos("Syed-Saad1");
  // GetdevTo("ddebajyati");
  // GetstackFlow(1688441);
  GethackerNews("tptacek");
  return (
    <>
      {/* Navbar */}
      <div className="w-full h-14 bg-white shadow ">
        <div className="flex items-center justify-between w-full h-full px-8">
          <div>
            <h1 className="font-bold text-[24px] font-sans text-black li-[24px]">
              Analytics<span className="text-[#009689]">.</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="cursor-pointer  bg-gray-100 flex justify-center text-sm font-medium  rounded-[10px] transition-all duration-200 hover:text-white  hover:bg-[#38B1A1] text-black items-center gap-2 w-25 h-10">
              <img className="h-3 w-3 " src={refreshIcon} alt="" />
              <button >Refresh</button>
            </div>

            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer flex justify-center text-[16px] font-medium rounded-[10px]  text-white  bg-[#38B1A1] items-center gap-2 w-36 h-10"
            >
              <img className="h-4 w-4 " src={AddIcon} alt="" />
              Add Widget
            </div>
          </div>
        </div>  
      </div>
      {isOpen && (
        <MyModal
          onClose={() => setIsOpen(false)}
          onGithub={() => {
            setIsOpen(false);
            setGithubOpen(true);
          }}
          onGithubRepos={() => {
            setIsOpen(false);
            setGithubOpen(false);
            setGithubReposOpen(true);
          }}
          onDevArticles={() => {
            setIsOpen(false);
            setGithubOpen(false);
            setGithubReposOpen(false);
            setDevArticles(true);
          }}
          onStackFlow={() => {
            setIsOpen(false);
            setGithubOpen(false);
            setGithubReposOpen(false);
            setDevArticles(false);
            setStackOverFlow(true);
          }}
          onHackerNews={() => {
            setIsOpen(false);
            setGithubOpen(false);
            setGithubReposOpen(false);
            setDevArticles(false);
            setStackOverFlow(false);
            setHackerNews(true);
          }}
        />
      )}{" "}
      {githubOpen && <ConfigureGitHub onClose={() => setGithubOpen(false)} />}
      {githubReposOpen && (
        <ConfigureGitHubRepos onClose={() => setGithubReposOpen(false)} />
      )}
      {devArticles && (
        <ConfigureDevToArticles onClose={() => setDevArticles(false)} />
      )}
      {stackOverFlow && (
        <ConfigureStackOverflowSummury
          onClose={() => setStackOverFlow(false)}
        />
      )}
      {hackerNews && (
        <ConfigureHakerNewsActivity onClose={() => setHackerNews(false)} />
      )}
      {/* UI */}
      <div className="h-[calc(100vh-64px)] bg-gray-50 flex flex-col justify-center items-center gap-2">
        <div className="bg-gray-100   h-20 w-20 flex items-center justify-center rounded-[14px]">
          <img className="h-14 w-14 object-cover  " src={WidgetIcon} alt="" />
        </div>
        <div>
          <h2 className="font-medium  text-black text-[20px] ">
            No widgets yet
          </h2>
        </div>
        <div>
          <p className="text-[14px] text-center font-[Inter,Poppins,sans-serif] text-[#826A72]">
            Click "Add Widget" to start building your personalized <br />{" "}
            analytics dashboard
          </p>
        </div>
      </div>
    </>
  );
}
