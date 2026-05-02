import { WidgetContext } from "../context/WidgetContextProvider";
import { useContext } from "react";

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error("useWidgetContext must be wrap inside widget context");
  }

  const {
    onOpenWidget,
    onOpenGithubProfile,
    onOpenGithubRepo,
    onOpendevTo,
    onOpenStackflow,
    onOpenhackerNews,
    getGithubProfile,
    GetgithubRepos,
    GetdevTo,
    GetstackFlow,
    GethackerNews,
    refreshWidget,
    handleDelete,
  } = context;
  return {
    onOpenWidget,
    onOpenGithubProfile,
    onOpenGithubRepo,
    onOpendevTo,
    onOpenStackflow,
    onOpenhackerNews,
    getGithubProfile,
    GetgithubRepos,
    GetdevTo,
    GetstackFlow,
    GethackerNews,
    refreshWidget,
    handleDelete,
  };
};
