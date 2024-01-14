import { IIcon } from "@interfaces/index";

export const IconEnergie = ({
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
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M4.914 1.714A1 1 0 0 1 5.873 1h4.406a1 1 0 0 1 .936 1.351L10.222 5h2.03a.75.75 0 0 1 .586 1.217l-6.607 8.3c-.854 1.073-2.562.188-2.178-1.128L5.333 9H3.75a.75.75 0 0 1-.72-.964zM10.28 2H5.873L4.085 8H6a.5.5 0 0 1 .48.64l-1.467 5.029a.235.235 0 0 0 .006.174a.264.264 0 0 0 .119.118c.057.03.116.037.164.029a.235.235 0 0 0 .147-.095L11.733 6H9.5a.5.5 0 0 1-.468-.676z"
    />
  </svg>
);
