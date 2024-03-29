import { IIcon } from '@interfaces/index';

export const IconReset = ({
  width = 24,
  height = 24,
  className = '',
  color,
  onClick
}: IIcon) => (
  <svg
    className={className}
    height={height}
    width={width}
    fill="none"
    onClick={onClick}
    viewBox="0 0 21 21"
    stroke={color ?? 'currentColor'}
    strokeWidth={2}
    strokeLinecap="round"
    fillRule="evenodd"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
    <path d="M7.5 6.5h-4v-4" />
  </svg>
);
