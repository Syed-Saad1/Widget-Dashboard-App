import axios from "axios";

export const STORAGE_KEY = "widgets";

export const getGithubProfile = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...parsedWidgets,
      { id: "github-profile", data: response.data },
    ]),
  );
};

export const GetgithubRepos = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  );
  console.log(response);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...parsedWidgets,
      { id: "ReposCards", data: response.data },
    ]),
  );
};

export const GetdevTo = async (username) => {
  const response = await axios.get(
    `https://dev.to/api/articles?username=${username}`,
  );
  console.log(response);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...parsedWidgets,
      { id: "devtoarticles", data: response.data },
    ]),
  );
};

export const GetstackFlow = async (userID) => {
  const response = await axios.get(
    `https://api.stackexchange.com/2.3/users/${userID}?site=stackoverflow`,
  );
  console.log(response);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...parsedWidgets,
      { id: "stackoverflowsummary", data: response.data },
    ]),
  );
};

export const GethackerNews = async (username) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/user/${username}.json`,
  );
  console.log(response);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...parsedWidgets,
      { id: "hackernews", data: response.data },
    ]),
  );
};
