import axios from "axios";

export const GetgithubProfile = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);

  // console.log("RES:", response.data.login);
};

export const GetgithubRepos = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  );

  // console.log("RES:", response);
};

export const GetdevTo = async (username) => {
  const response = await axios.get(
    `https://dev.to/api/articles?username={username}`,
  );

  // console.log("RES:", response);
};

export const GetstackFlow = async (id) => {
  const response = await axios.get(
    `https://api.stackexchange.com/2.3/users/${id}?site=stackoverflow`,
  );

  // console.log("RES:", response);
};

export const GethackerNews = async (username) => {
  const response = await axios.get(
    ` https://hacker-news.firebaseio.com/v0/user/{id}.json`,
  );

  // console.log("RES:", response);
};
