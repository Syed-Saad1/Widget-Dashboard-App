import React from "react";
import SettingIcon from "../assets/setting.png";
import RefreshIcon from "../assets/refreshicon.png";
import DeleteIcon from "../assets/bin.png";
import Message from "../assets/message.png";
export default function () {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 ">
        <div className="h-auto w-125 bg-[#ffffff] shadow-2xl rounded-3xl px-3 py-3">
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

          <div className="flex justify-between items-center px-2">
            <p className="text-[16px] font-medium font-[Inter,Poppins,sans-serif] text-black">
              danso
            </p>
            <span className="flex">
              <p className="font-[JetBrains Mono,monospace] text[16px] text-black font-bold">
                167415 &nbsp;
              </p>{" "}
              <p className="text-[14px] font-normal text-[#AF99A1] pt-1">
                {" "}
                KARMA
              </p>
            </span>
          </div>

          <div className="mt-4">
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                yeah it’s totally plausible that Google would risk the
                reputation and legal status of its global multi-trillion empire
                to dunk on one of the handful of people who have the
                near-unilateral authority to dismantle them
              </p>
            </div>
            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                I too am very curious about this. Even if his password was
                exposed and he didn’t have 2-factor auth, doesn’t Google by
                default ask for confirmation — e.g. texting a number or backup
                email associated with the account — when seeing an unrecognized
                device? Maybe he didn’t have any alt contact methods associated
                with his account? which might not be that unusual, he’s old
                enough to have opened a gmail account upon launch, before extra
                info hoops were put in place, and maybe he never touched his
                account config in the past 2 decades?
              </p>
            </div>

            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                Maybe they&#x27;re like me, who didn&#x27;t spend a lot of time
                investigating Claude until 4.6 launched and the hype was enough
                to be the tipping point to invest energy. I do know that
                I&#x27;ve been having good&#x2F;great results with Opus 4.6 and
                the CLI, but after an hour or so, it&#x27;ll suddenly forget
                that the codebase has tab-formatted files and burn up my quota
                trying to figure out how to read text files. And apparently this
                snafu has been around since at least late last year [0]. Again,
                I can&#x27;t complain about the overall speed and quality for my
                relatively light projects, I&#x27;m just fascinated by people
                who say their agents can get through a whole weekend without
                supervision, when even 4.6 appears to randomly get tripped up in
                a very rookie way?[0]{" "}
                <a
                  href="https:&#x2F;&#x2F;github.com&#x2F;anthropics&#x2F;claude-code&#x2F;issues&#x2F;11447"
                  rel="nofollow"
                >
                  https:&#x2F;&#x2F;github.com&#x2F;anthropics&#x2F;claude-code&#x2F;issues&#x2F;11447
                </a>
              </p>
            </div>

            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                I&#x27;ve always suspected video-gen is basically a loss leader
                for OpenAI, Gemini, and Grok. They can&#x27;t convince the
                general population that AI is world-changing trillion dollar
                tech with &quot;vibe coding&quot;, but realistic fake videos are
                impressive at a glance, and might convince many non-technical
                people that AI&#x2F;LLMs are something revolutionary.
              </p>
            </div>

            <div className="w-121 h-14 hover:bg-[#F9F9F9] flex justify-between items-center gap-4 rounded-xl px-4 mb-2">
              <img className="h-3.5 w-3.5" src={Message} alt="" />
              <p className="text-[12px] text-[#b3b2b2] font-normal truncate">
                Why shouldn’t people have a reaction to a policy that mandates a
                new approval process on a large class of consumer products?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
