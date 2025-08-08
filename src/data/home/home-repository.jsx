import { get, getColumn } from "../base-repository";

export const getProfilePhoto = async () => {
  return await getColumn("readme", "avatar_url");
};

export const getReadMeContent = async () => {
  return await get("readme");
};

export const getExperienceContent = async () => {
  return await get("experience", "order", "ascending", true);
};
