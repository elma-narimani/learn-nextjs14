'use client';

import Link from "next/link";
import styles from "../../styles/movie.module.scss";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

const Movie = ({ id, title, poster_path }: IMovieProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  }

  return (
    <li className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default Movie;
