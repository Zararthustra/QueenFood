import { IIcon } from '@interfaces/index';

export const IconDrink = ({
  width = 24,
  height = 24,
  className = '',
  style,
  color,
  onClick
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    style={style}
    fill={color ?? 'currentColor'}
    viewBox="0 0 14 14">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.71.5a.48.48 0 0 0-.46.31a.49.49 0 0 0 .1.54L7 7l5.65-5.65a.49.49 0 0 0 .1-.54a.48.48 0 0 0-.46-.31ZM7 7v6.5m-3 0h6"
    />
  </svg>
);
