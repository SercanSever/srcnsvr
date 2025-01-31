import { get } from "../base-repository";

export const getProjectContent = async () => {
  return await get("project");
};

export const getProjectList = async () => {
  return await get("project_list", "order", "ascending", true);
};
