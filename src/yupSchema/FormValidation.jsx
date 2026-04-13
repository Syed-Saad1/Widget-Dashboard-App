import * as Yup from "yup";

export const GitProfileSchema = Yup.object({
  username: Yup.string().required("Username is required"),
});
export const GitRepoSchema = Yup.object({
  username: Yup.string().required("Username is required"),
});
export const DevToSchema = Yup.object({
  username: Yup.string().required("Username is required"),
});
export const StackOverFlow = Yup.object({
  userID: Yup.string().required("UserID is required"),
});
export const HackerNews = Yup.object({
  username: Yup.string().required("Hacker News Username Is Required"),
});
