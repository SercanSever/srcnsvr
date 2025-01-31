import { get } from "../base-repository";

export const getReadMeContent = async () => {
  return await get("readme");
};

export const getExperienceContent = async () => {
  return await get("experience", "order", "ascending", true);
};
