import { IIcon } from '@interfaces/index';

export const IconScan = ({
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
    <path
      fill="currentColor"
      d="M4 6h2v12H4zm3 0h1v12H7zm2 0h3v12H9zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zM2 4v4H0V4a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
    />
  </svg>
);
