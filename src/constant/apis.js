import axios from "axios";

export const STORAGE_KEY = "widgets";

export const getGithubProfile = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  if (!response.data) return;
  const widgets = localStorage.getItem(STORAGE_KEY);
  console.log("widgets:", widgets);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  console.log("parsedWidgets:", parsedWidgets);

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
  if (!response.data) return;

  const RepoDats = response.data.slice(0, 5) || [];
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...parsedWidgets, { id: "ReposCards", data: RepoDats }]),
  );
};

export const GetdevTo = async (username) => {
  const response = await axios.get(
    `https://dev.to/api/articles?username=${username}`,
  );
  console.log(response);
  if (!response.data) return;
  const devDats = response.data.slice(0, 5) || [];

  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...parsedWidgets, { id: "devtoarticles", data: devDats }]),
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
  try {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${username}.json`,
    );

    if (!response?.data) return null;

    const ids = response.data.submitted?.slice(0, 5) || [];

    const posts = await Promise.all(
      ids.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json(),
        ),
      ),
    );

    const payload = {
      id: response.data.id,
      karma: response.data.karma,
      posts: posts,
    };

    console.log("payload:", payload);

    const widgets = localStorage.getItem(STORAGE_KEY);
    const parsedWidgets = JSON.parse(widgets ?? "[]");

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...parsedWidgets, { id: "hackernews", data: payload }]),
    );

    return payload;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

export const handleDelete = (index) => {
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");

  const filteredWidgets = parsedWidgets.filter((_, ind) => ind !== index);

  console.log("filteredWidgets:", filteredWidgets);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredWidgets));
};
