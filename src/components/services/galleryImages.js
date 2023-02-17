import axios from 'axios';

export const galleryImageDataFetch = async (q, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${q}&page=${page}&key=32917844-8e8c51c8f603babcea5f94901&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data.hits;
};
