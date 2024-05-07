import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('broke')
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ( {id}:  { id: string }) => {
  const videos = await getVideos(id);

  return (
    <>
      <h3>{JSON.stringify(videos)}</h3>
    </>
  );
};

export default MovieVideos;
