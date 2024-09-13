import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2rem 1fr 1fr;
  grid-template-areas:
    "ruler ruler ruler ruler"
    "venue1 venue1 venue1 venue1"
    "venue2 venue2 venue2 venue2"
    "venue3 venue3 venue3 venue3";
  border: 2px solid black;
  height: 100%;
`;
