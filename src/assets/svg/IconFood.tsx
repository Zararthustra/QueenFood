import { IIcon } from "@interfaces/index";

export const IconFood = ({
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
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M7.684 41.188c.146-4.908-2.524-6.756-5.78-7.977c-1.082 4.199 1.904 7.693 5.78 7.977m.737-21.915c2.076-4.445.356-7.211-2.16-9.618c-2.641 3.432-1.283 7.82 2.16 9.618m1.171 12.374c-.143-4.905 2.524-6.761 5.782-7.977c1.078 4.197-1.906 7.69-5.782 7.977m0 7.565c-.143-4.905 2.524-6.756 5.782-7.975c1.078 4.196-1.906 7.69-5.782 7.975m0-15.127c-.143-4.907 2.524-6.763 5.782-7.982c1.078 4.201-1.906 7.693-5.782 7.982m-1.908 9.539c.146-4.905-2.524-6.761-5.78-7.977c-1.082 4.197 1.904 7.691 5.78 7.977m0-7.562c.146-4.908-2.524-6.763-5.78-7.984c-1.082 4.203 1.904 7.692 5.78 7.984m36.769 37.007H18.142l13.157-22.796zM23.369 60.05h15.858l-7.929-13.735zM3.843 47.54l55.741-15.164l-.828-3.063L3.011 44.479zM43.176.634s.408 8.041 7.456 7.359c0 0 .795-6.718-7.456-7.359m7.379 26.153a4.082 4.082 0 0 1-3.339 1.716c-1.123 0-2.223-.528-2.965-1.268c-1.518-1.656-3.486-5.358-3.486-5.358c-1.103-2.239-1.694-3.971-1.694-5.722c0-3.73 3.019-6.965 6.759-6.965a6.74 6.74 0 0 1 4.726 1.93a6.732 6.732 0 0 1 4.724-1.93c3.739 0 6.758 3.235 6.758 6.965c0 1.751-.592 3.483-1.694 5.722c0 0-1.968 3.701-3.486 5.358c-.742.74-1.842 1.268-2.966 1.268a4.078 4.078 0 0 1-3.338-1.716z"
    />
  </svg>
);
