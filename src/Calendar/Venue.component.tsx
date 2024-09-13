import { ReactNode } from "react";
import { VenueContainer } from "@/Calendar/elements/venue.elements";
export default function Venue({ children }: { children: ReactNode }) {
  return <VenueContainer>{children}</VenueContainer>;
}
