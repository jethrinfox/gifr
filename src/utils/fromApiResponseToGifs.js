const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.fixed_width_downsampled;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default fromApiResponseToGifs;
