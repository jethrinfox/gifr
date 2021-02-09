import instance from "api/request";
import fromApiResponseToGifs from "utils/fromApiResponseToGifs";

export default async function getTrendingGifs({ limit = 8, page = 0 } = {}) {
  const { data } = await instance("/gifs/trending", {
    params: {
      lang: "en",
      limit,
      page,
      offset: page * limit,
    },
  });
  return fromApiResponseToGifs(data);
}
