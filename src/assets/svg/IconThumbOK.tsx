import { IIcon } from "@interfaces/index";

export const IconThumbOK = ({
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
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2M9 9l4.34-4.34L12 10h9v2l-3 7H9zM1 9h4v12H1z"
    />
  </svg>
);
