import { API } from "../../urlConfig";

const baseURL = API;

export async function fetchYoutubeFeed() {
  const res = await fetch(`${baseURL}youtube-feed`); 
  if (!res.ok) throw new Error("Failed to fetch videos");
  return await res.json();
}