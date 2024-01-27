import { IIcon } from '@interfaces/index';

export const IconCrownOutlined = ({
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
    viewBox="0 0 36 36">
    <path
      fill="#FFD233"
      d="M4 13.33a1.39 1.39 0 1 0-1.4 1.39A1.39 1.39 0 0 0 4 13.33m27.81 2.51a20.35 20.35 0 0 0-4.58 1.43a22.7 22.7 0 0 0-3.48 2.1a17.69 17.69 0 0 1-1.75-2.8a47.65 47.65 0 0 1-2.8-7.69a1 1 0 0 0-1-.74a1 1 0 0 0-1 .74a46.71 46.71 0 0 1-2.8 7.69a17 17 0 0 1-1.76 2.8a22.7 22.7 0 0 0-3.48-2.1a20.66 20.66 0 0 0-4.58-1.43a1 1 0 0 0-1 .39a1 1 0 0 0-.09 1.05a50.13 50.13 0 0 1 4.33 13.89a1 1 0 0 0 1 .83h18.8a1 1 0 0 0 1-.83a50.15 50.15 0 0 1 4.26-13.89a1 1 0 0 0-.09-1.05a1 1 0 0 0-.98-.39M26.79 30H9.64a55.66 55.66 0 0 0-3.4-11.71a15.75 15.75 0 0 1 2.09.78a20 20 0 0 1 3.85 2.45a1 1 0 0 0 1.39-.09a19.28 19.28 0 0 0 2.67-4a43.46 43.46 0 0 0 2-4.89a41.74 41.74 0 0 0 2 4.89a19.92 19.92 0 0 0 2.66 4a1 1 0 0 0 1.4.09a19.21 19.21 0 0 1 3.85-2.45a14.77 14.77 0 0 1 2.09-.78A55.07 55.07 0 0 0 26.79 30"
    />
    <circle cx="33.83" cy="13.33" r="1.39" fill="#FFD233" />
    <path
      fill="#FFD233"
      d="M18.22 6.39A1.39 1.39 0 1 0 16.84 5a1.39 1.39 0 0 0 1.38 1.39m.01 19.95a1.11 1.11 0 1 0 1.1 1.1a1.1 1.1 0 0 0-1.1-1.1m-5.65 0a1.11 1.11 0 1 0 1.1 1.1a1.1 1.1 0 0 0-1.1-1.1m11.31 0a1.11 1.11 0 1 0 1.1 1.1a1.1 1.1 0 0 0-1.1-1.1"
    />
  </svg>
);
