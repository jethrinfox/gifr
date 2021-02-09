import instance from "api/request";

export default async function getTrendingGifs() {
  const { data } = await instance("/trending/searches");
  return data;
}
