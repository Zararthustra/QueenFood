import { IIcon } from '@interfaces/index';

export const IconPDF = ({
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
    viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"
    />
  </svg>
);
