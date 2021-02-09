import request from "api/request";
import fromApiResponseToGifs from "utils/fromApiResponseToGifs";

export default async function getGifs({
  limit = 16,
  keyword = "",
  page = 0,
} = {}) {
  const { data } = await request("/gifs/search", {
    params: {
      q: keyword,
      lang: "en",
      limit,
      page,
      offset: page * limit,
    },
  });
  return fromApiResponseToGifs(data);
}
