import styled from "styled-components";

export const FilmRectangle = styled.div<{ $length: number }>`
  height: 2rem;
  width: ${({ $length }) => $length.toString() + "px"};
  background-color: crimson;
  border: 2px solid salmon;
`;
