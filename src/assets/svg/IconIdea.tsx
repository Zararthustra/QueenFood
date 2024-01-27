import { IIcon } from '@interfaces/index';

export const IconIdea = ({
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
    viewBox="0 0 15 15">
    <path
      fill="currentColor"
      d="m4.076 6.47l.495.07zm-.01.07l-.495-.07zm6.858-.07l.495-.07zm.01.07l-.495.07zM9.5 12.5v.5a.5.5 0 0 0 .5-.5zm-4 0H5a.5.5 0 0 0 .5.5zm-.745-3.347l.396-.306zm5.49 0l-.396-.306zM6 15h3v-1H6zM3.58 6.4l-.01.07l.99.14l.01-.07zM7.5 3a3.959 3.959 0 0 0-3.92 3.4l.99.14A2.959 2.959 0 0 1 7.5 4zm3.92 3.4A3.959 3.959 0 0 0 7.5 3v1a2.96 2.96 0 0 1 2.93 2.54zm.01.07l-.01-.07l-.99.14l.01.07zm-.79 2.989c.63-.814.948-1.875.79-2.99l-.99.142a2.951 2.951 0 0 1-.59 2.236zM9 10.9v1.6h1v-1.599zm.5 1.1h-4v1h4zm-3.5.5v-1.599H5V12.5zM3.57 6.47a3.951 3.951 0 0 0 .79 2.989l.79-.612a2.951 2.951 0 0 1-.59-2.236zM6 10.9c0-.823-.438-1.523-.85-2.054l-.79.612c.383.495.64.968.64 1.442zm3.85-2.054C9.437 9.378 9 10.077 9 10.9h1c0-.474.257-.947.64-1.442zM7 0v2h1V0zM0 8h2V7H0zm13 0h2V7h-2zM3.354 3.646l-1.5-1.5l-.708.708l1.5 1.5zm9 .708l1.5-1.5l-.708-.708l-1.5 1.5z"
    />
  </svg>
);
