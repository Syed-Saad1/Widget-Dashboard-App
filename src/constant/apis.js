import axios from "axios";

export const STORAGE_KEY = "widgets";

export const handleDelete = (index) => {
  const widgets = localStorage.getItem(STORAGE_KEY);
  const parsedWidgets = JSON.parse(widgets ?? "[]");

  const filteredWidgets = parsedWidgets.filter((_, ind) => ind !== index);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredWidgets));
};
