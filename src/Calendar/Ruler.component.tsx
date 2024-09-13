import {
  RulerContainer,
  TickContainer,
  RulerTick,
  NumbersContainer,
} from "./elements/ruler.elements";

export default function Ruler({ length }: { length: number }) {
  return (
    <RulerContainer>
      <TickContainer>
        {Array(length)
          .fill()
          .map((_, index) => (
            <RulerTick key={index} />
          ))}
      </TickContainer>
      <NumbersContainer>123</NumbersContainer>
    </RulerContainer>
  );
}
