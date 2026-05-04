import { createContext, useMemo, useState } from "react";
import { STORAGE_KEY } from "../constant/apis";
import axios from "axios";

export const WidgetContext = createContext();

const ModalView = {
  widget: "widget",
  github: "github",
  githubRepo: "githubrepo",
  devTo: "devTo",
  stackflow: "stackflow",
  hackerNews: "hackerNews",
};

export const WidgetContextProvider = ({ children }) => {
  const [widgets, setWidgets] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [widgetVersion, setWidgetVersion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isGithubProfile = modalView === ModalView.github;
  const isGithubRepo = modalView === ModalView.githubRepo;
  const isdevTo = modalView === ModalView.devTo;
  const isStack = modalView === ModalView.stackflow;
  const ishacker = modalView === ModalView.hackerNews;

  const Widget = useMemo(() => {
    const safeParse = (value) => {
      try {
        return JSON.parse(value ?? "[]");
      } catch {
        return [];
      }
    };
  }, [widgetVersion]);

  const refreshWidget = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    setWidgets(safeParse(data));
  };

  const getGithubProfile = async (username) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
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
    } catch (error) {
      console.error("GitHub Profile Fetch Error:", error);
    } finally {
      setWidgetVersion((prev) => prev + 1);
      setIsLoading(false);
    }
  };

  const GetgithubRepos = async (username) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );
      if (!response.data) return;

      const RepoDats = response.data.slice(0, 5) || [];
      const widgets = localStorage.getItem(STORAGE_KEY);
      const parsedWidgets = JSON.parse(widgets ?? "[]");
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
          ...parsedWidgets,
          { id: "ReposCards", data: RepoDats },
        ]),
      );
    } catch (error) {
      console.error("GitHub Repos Fetch Error:", error);
    } finally {
      setIsLoading(false);

      setWidgetVersion((prev) => prev + 1);
    }
  };

  const GetdevTo = async (username) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://dev.to/api/articles?username=${username}`,
      );
      if (!response.data) return;
      const devDats = response.data.slice(0, 5) || [];

      const widgets = localStorage.getItem(STORAGE_KEY);
      const parsedWidgets = JSON.parse(widgets ?? "[]");
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
          ...parsedWidgets,
          { id: "devtoarticles", data: devDats },
        ]),
      );
    } catch (error) {
      console.error("Dev.To Articles Fetch Error:", error);
    } finally {
      setIsLoading(false);
      setWidgetVersion((prev) => prev + 1);
    }
  };

  const GetstackFlow = async (userID) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/users/${userID}?site=stackoverflow`,
      );
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
    } catch (error) {
      console.error("StackOverflow Summary Fetch Error:", error);
    } finally {
      setIsLoading(false);
      setWidgetVersion((prev) => prev + 1);
    }
  };

  const GethackerNews = async (username) => {
    try {
      setIsLoading(true);
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

      const widgets = localStorage.getItem(STORAGE_KEY);

      const parsedWidgets = JSON.parse(widgets ?? "[]");

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
          ...parsedWidgets,
          {
            id: "hackernews",
            data: payload,
          },
        ]),
      );

      return payload;
    } catch (error) {
      console.error("HackerNews Fetch Error:", error);
      return null;
    } finally {
      setIsLoading(false);
      setWidgetVersion((prev) => prev + 1);
    }
  };

  const onOpenWidget = () => {
    setModalView(ModalView.widget);
  };
  const onOpenGithubProfile = () => {
    setModalView(ModalView.github);
  };

  const onOpenGithubRepo = () => {
    setModalView(ModalView.githubRepo);
  };
  const onOpendevTo = () => {
    setModalView(ModalView.devTo);
  };
  const onOpenStackflow = () => {
    setModalView(ModalView.stackflow);
  };
  const onOpenhackerNews = () => {
    setModalView(ModalView.hackerNews);
  };

  const handleDelete = (index) => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      const parsedData = JSON.parse(data ?? "[]");
      const updatedData = parsedData.filter((item, i) => i !== index);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (error) {
      console.error("Delete Widget Error:", error);
    } finally {
      setWidgetVersion((prev) => prev + 1);
    }
  };

  const values = {
    getGithubProfile,
    GetgithubRepos,
    GetdevTo,
    GetstackFlow,
    GethackerNews,
    refreshWidget,
    handleDelete,
    isLoading,
  };

  return (
    <WidgetContext.Provider value={values}>{children}</WidgetContext.Provider>
  );
};
