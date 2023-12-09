import Svg, { Circle, Rect } from "react-native-svg";
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Circle cx={6.662} cy={4.458} r={3.3} stroke="#181725" strokeWidth={1.9} />
    <Rect
      width={3.308}
      height={2.083}
      x={0.892}
      y={3.416}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
      rx={1.042}
    />
    <Circle
      cx={12.319}
      cy={13.807}
      r={3.3}
      stroke="#181725"
      strokeWidth={1.9}
      transform="rotate(-180 12.319 13.807)"
    />
    <Rect
      width={7.836}
      height={2.083}
      x={9.834}
      y={3.416}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
      rx={1.042}
    />
    <Rect
      width={7.84}
      height={2.083}
      x={9.146}
      y={14.848}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
      rx={1.042}
      transform="rotate(-180 9.146 14.848)"
    />
    <Rect
      width={2.841}
      height={2.083}
      x={17.995}
      y={14.848}
      fill="#181725"
      stroke="#181725"
      strokeWidth={0.3}
      rx={1.042}
      transform="rotate(-180 17.995 14.848)"
    />
  </Svg>
);
export default FilterIcon;
