import { IIcon } from "@interfaces/index";

export const IconFormula = ({
  width = 24,
  height = 24,
  className = "",
  style,
  color,
  onClick,
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    style={style}
    fill={color ?? "currentColor"}
    viewBox="0 0 48 48"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="m40 9l-3-3H8l18 18L8 42h29l3-3"
    />
  </svg>
);
