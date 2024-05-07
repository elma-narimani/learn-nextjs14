import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h3>Movie detail</h3>
      <Suspense fallback={<h4>loading movie info</h4>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h4>loading movie videos</h4>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
