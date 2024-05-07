import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};


const MovieInfo = async ({id}:  { id: string } ) => {
  const movie = await getMovie(id);

  return (
    <>
      <h3>{movie.title}</h3>
    </>
  );
};

export default MovieInfo;
