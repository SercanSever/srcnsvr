import { get } from "../base-repository";

export const getStackContent = async () => {
  return await get("stack");
};

export const getStackList = async () => {
  return await get("stack_list");
};

export const getCategoryList = async () => {
  return await get("category", "order", "ascending", true);
};
