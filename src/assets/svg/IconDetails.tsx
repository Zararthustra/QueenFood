import { IIcon } from '@interfaces/index';

export const IconDetails = ({
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
    viewBox="0 0 24 24">
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M11 5h10M11 9h5" />
      <rect width="4" height="4" x="3" y="5" fill="currentColor" rx="1" />
      <path d="M11 15h10m-10 4h5" />
      <rect width="4" height="4" x="3" y="15" fill="currentColor" rx="1" />
    </g>
  </svg>
);
