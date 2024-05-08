import { API_URL } from "../../../../api";
import { Iparams } from "../../page";

const getSimilarMovies = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  console.log(`${API_URL}/movies/${id}/credits`);
  return response.json();
};

const SimilarMoviesPage = async ({ params: { id } }: Iparams) => {
  const similars = await getSimilarMovies(id);

  return (
    <ul>
      {similars.map((movie) => (
        <li key={movie.id}>
          <img src={movie.poster_path} alt={movie.title} />
          <h1>{movie.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default SimilarMoviesPage;
