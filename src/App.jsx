import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Modal from "./Components/Modal.jsx";
import ConfigureGithub from "./Components/ConfigureGitHub.jsx";
import ConfigureGithubRepos from "./Components/ConfigureGitHubRepos.jsx";
import ConfigureDevToArticles from "./Components/ConfigureDev.ToArticles.jsx";
import ConfigureStackOverflowSummury from "./Components/ConfigureStackOverflowSummury.jsx";
import ConfigureHakerNewsActivity from "./Components/ConfigureHakerNewsActivity.jsx";
import GithubProfileCard from "./Components/GithubProfileCard.jsx";
import GithubRepoesCard from "./Components/GithubRepoesCard.jsx";
import DevtoArticlesCard from "./Components/DevtoArticlesCard.jsx";
import StackflowCard from "./Components/StackflowCard.jsx";
import HackerNewsCard from "./Components/HackerNewsCard.jsx";
import { STORAGE_KEY } from "./constant/apis.js";
import WidgetIcon from "./assets/Widget-icon.png";

function App() {
  const widgets = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const isEmpty = widgets.length === 0;

  console.log("widgets:", widgets);

  return (
    <>
      <Header />

      {isEmpty ? (
        <div className="h-[calc(100vh-64px)] bg-gray-50 flex flex-col justify-center items-center gap-2">
          <div className="bg-gray-100 h-20 w-20 flex items-center justify-center rounded-[14px]">
            <img
              className="h-14 w-14 object-cover"
              src={WidgetIcon}
              alt="widget"
            />
          </div>

          <h2 className="font-medium text-black text-[20px]">No widgets yet</h2>

          <p className="text-[14px] text-center font-[Inter,Poppins,sans-serif] text-[#826A72]">
            Click "Add Widget" to start building your personalized <br />
            analytics dashboard
          </p>
        </div>
      ) : (
        <div className="p-4 flex flex-wrap gap-5 bg-gray-50 min-h-[calc(100vh-64px)]">
          {widgets.map((item) => {
            switch (item.id) {
              case "github-profile":
                return <GithubProfileCard key={item.id} data={item.data} />;

              case "ReposCards":
                return <GithubRepoesCard key={item.id} data={item.data} />;

              case "devtoarticles":
                return <DevtoArticlesCard key={item.id} data={item.data} />;

              case "stackoverflowsummary":
                return <StackflowCard key={item.id} data={item.data} />;

              case "hackernews-activity":
                return <HackerNewsCard key={item.id} data={item.data} />;

              default:
                return null;
            }
          })}
        </div>
      )}
    </>
  );
}

export default App;
