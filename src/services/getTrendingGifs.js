import instance from "api/request";
import fromApiResponseToGifs from "utils/fromApiResponseToGifs";

export default async function getTrendingGifs({
  limit = 6,
  rating = "g",
  page = 0,
} = {}) {
  const { data } = await instance("/gifs/trending", {
    params: {
      lang: "en",
      limit,
      rating,
      page,
    },
  });
  return fromApiResponseToGifs(data);
}
