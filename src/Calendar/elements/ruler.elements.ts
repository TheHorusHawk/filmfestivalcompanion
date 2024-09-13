import styled from "styled-components";

export const RulerTick = styled.div`
  height: 10px;
  padding: 5px;
  border-right: 1px solid crimson;
`;

export const TickContainer = styled.div`
  grid-area: ticks;
  display: flex;
`;

export const RulerContainer = styled.div`
  background-color: lightGrey;
  grid-area: ruler;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "ticks"
    "numbers";
`;

export const NumbersContainer = styled.div`
  grid-area: numbers;
  color: black;
`;
