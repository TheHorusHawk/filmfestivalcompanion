type Film = {
  title: string;
  duration: number;
  startingTime: number;
};

import { FilmRectangle } from "./elements/timeline.elements";

export default function FilmComponent({ film }: { film: Film }) {
  const { title, duration, startingTime } = film;
  return <FilmRectangle $length={duration * 2}>{title}</FilmRectangle>;
}
