export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lemHtfIHEq2vPORvzX7HJkaEw3GZvlyw&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height.url,
  }));

  return gifs;
};
