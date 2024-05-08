import Link from "next/link";
import { Iparams } from "../../page";
import { API_URL } from "../../../../api";

const getMovieProviders = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
};

const MovieProvidersPage = async ({ params: { id } }: Iparams) => {
  const movieProviders = await getMovieProviders(id);

  return (
    <ul>
      {movieProviders.map((movieProvider) => (
        <li>
          <Link href={movieProvider.link}>link</Link>
          {/* <img
            src={movieProvider?.flatrate?.logo_path}
            alt={movieProvider?.flatrate?.provider_name}
          /> */}
        </li>
      ))}
    </ul>
  );
};

export default MovieProvidersPage;
