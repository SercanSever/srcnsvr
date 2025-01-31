import { get } from "../base-repository";

export const getWorkspaceContent = async () => {
  return await get("workspace");
};

export const getWorkspaceList = async () => {
  return await get("workspace_list", "order", "ascending", true);
};
