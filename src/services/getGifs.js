import request from "api/request";
import fromApiResponseToGifs from "utils/fromApiResponseToGifs";

export default async function getGifs({
  limit = 15,
  rating = "g",
  keyword = "",
  page = 0,
} = {}) {
  const { data } = await request("/gifs/search", {
    params: {
      q: keyword,
      lang: "en",
      limit,
      rating,
      page,
    },
  });
  return fromApiResponseToGifs(data);
}
