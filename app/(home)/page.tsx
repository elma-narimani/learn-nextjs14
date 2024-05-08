import Movie from "../../components/movie";
import styles from '../../styles/home.module.scss'
import { API_URL } from "../api";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <ul className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </ul>
  );
};

export default HomePage;
