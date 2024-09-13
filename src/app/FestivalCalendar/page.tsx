"use client";
import { CalendarContainer } from "./calendar.elements";
import CalendarItem from "./calendarItem";
import FilmComponent from "@/Calendar/Film.component";
import Ruler from "@/Calendar/Ruler.component";
import Venue from "@/Calendar/Venue.component";

export default function Calendar() {
  const film1 = { title: "Superbad", duration: 120, startingTime: 900 };
  const film2 = {
    title: "Vampiric Superbad",
    duration: 100,
    startingTime: 900,
  };
  return (
    <CalendarContainer>
      <Ruler length={400} />
      <Venue>
        <FilmComponent film={film1} />
        <FilmComponent film={film2} />
      </Venue>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
      <CalendarItem>nonnon</CalendarItem>
    </CalendarContainer>
  );
}
