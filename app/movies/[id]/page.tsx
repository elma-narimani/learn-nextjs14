import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";
import Link from "next/link";

export interface Iparams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const MovieDetailPage = async ({ params: { id } }: Iparams) => {
  return (
    <div>
      <ul>
        <li>
          <Link href={`${id}/similar-movies`}>Similar Movies</Link>
        </li>
        <li>
          <Link href={`${id}/movie-credits`}>Credits</Link>
        </li>
        <li>
          <Link href={`${id}/movie-providers`}>providers</Link>
        </li>
      </ul>
      <Suspense fallback={<h4>loading movie info</h4>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h4>loading movie videos</h4>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
