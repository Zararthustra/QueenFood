import { ArgsProps } from "antd/es/notification/interface";

import {
  IconError,
  IconInfo,
  IconLoader,
  IconNutriScoreA,
  IconNutriScoreB,
  IconNutriScoreC,
  IconNutriScoreD,
  IconNutriScoreE,
  IconNutriScoreNull,
  IconSuccess,
  IconWarning,
  NOVA1,
  NOVA2,
  NOVA3,
  NOVA4,
  NOVANULL,
} from "@assets/index";

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const JsonToHtml = ({ json }: { json: object }) => (
  <pre>
    <code>{JSON.stringify(json, null, 4)}</code>
  </pre>
);

export const toastObject = (
  type: "success" | "error" | "warning" | "info" | "loading",
  title: string,
  description: string,
  key?: string,
) => {
  let icon;
  let borderColor;
  let iconColor;

  switch (type) {
    case "success":
      icon = <IconSuccess />;
      borderColor = "border-green-600";
      iconColor = "text-green-600";
      break;
    case "error":
      icon = <IconError />;
      borderColor = "border-red-500";
      iconColor = "text-red-500";
      break;
    case "warning":
      icon = <IconWarning />;
      borderColor = "border-yellow-500";
      iconColor = "text-yellow-500";
      break;
    case "info":
      icon = <IconInfo />;
      borderColor = "border-blue-700";
      iconColor = "text-blue-700";
      break;

    case "loading":
      icon = <IconLoader width={24} height={24} />;
      borderColor = "border-primary-500";
      iconColor = "text-primary-500";
      break;

    default:
      icon = <IconError />;
      borderColor = "border-red-500";
      iconColor = "text-red-500";
      break;
  }

  if (key)
    return {
      icon: icon,
      placement: "top",
      className: `${iconColor} border-l-4 border-solid ${borderColor}`,
      message: <h3 className="text-lg/[22px]">{title}</h3>,
      description: <p>{description}</p>,
      duration: type === "loading" ? 200 : 4,
      key: key,
    } as ArgsProps;

  return {
    icon: icon,
    placement: "top",
    className: `${iconColor} border-l-4 border-solid ${borderColor}`,
    message: <h3 className="text-lg/[22px]">{title}</h3>,
    description: <p>{description}</p>,
  } as ArgsProps;
};

export const messageObject = (
  type: "success" | "error" | "warning" | "info" | "loading",
  content: string,
  key?: string,
) => {
  let icon;

  switch (type) {
    case "success":
      icon = <IconSuccess className="text-green-600" />;
      break;
    case "error":
      icon = <IconError className="text-red-500" />;
      break;
    case "warning":
      icon = <IconWarning className="text-yellow-500" />;
      break;
    case "info":
      icon = <IconInfo className="text-blue-700" />;
      break;

    case "loading":
      icon = <IconLoader className="text-primary-500" />;
      break;

    default:
      icon = <IconError className="text-red-500" />;
      break;
  }

  if (key)
    return {
      icon: icon,
      content,
      key: key,
      duration: type === "loading" ? 200 : 4,
    };

  return {
    icon: icon,
    content: content,
  };
};

export const labelShortener = (label: string, limit: number) => {
  if (label.length > limit) return label.slice(0, limit - 3) + "...";
  return label;
};

export const getNutriScoreSvg = (nutriscore: string, width: number) => {
  switch (nutriscore) {
    case "a":
      return <IconNutriScoreA width={width} />;
    case "b":
      return <IconNutriScoreB width={width} />;
    case "c":
      return <IconNutriScoreC width={width} />;
    case "d":
      return <IconNutriScoreD width={width} />;
    case "e":
      return <IconNutriScoreE width={width} />;

    default:
      return <IconNutriScoreNull width={width} />;
  }
};

export const getNovaGroupImg = (novaGroup: number, small?: boolean) => {
  switch (novaGroup) {
    case 1:
      return (
        <img
          className={
            small ? "w-[17px] object-contain" : "w-[30px] object-contain"
          }
          src={NOVA1}
          alt={`NOVA group ${novaGroup}`}
        />
      );
    case 2:
      return (
        <img
          className={
            small ? "w-[17px] object-contain" : "w-[30px] object-contain"
          }
          src={NOVA2}
          alt={`NOVA group ${novaGroup}`}
        />
      );
    case 3:
      return (
        <img
          className={
            small ? "w-[17px] object-contain" : "w-[30px] object-contain"
          }
          src={NOVA3}
          alt={`NOVA group ${novaGroup}`}
        />
      );
    case 4:
      return (
        <img
          className={
            small ? "w-[17px] object-contain" : "w-[30px] object-contain"
          }
          src={NOVA4}
          alt={`NOVA group ${novaGroup}`}
        />
      );

    default:
      return (
        <img
          className={
            small ? "w-[17px] object-contain" : "w-[30px] object-contain"
          }
          src={NOVANULL}
          alt={`No NOVA group`}
        />
      );
  }
};

export const getNutrientLevelColor = (nutrientLevel: string) => {
  switch (nutrientLevel) {
    case "low":
      return <div className="h-[10px] w-[10px] rounded-full bg-green-500" />;
    case "moderate":
      return <div className="h-[10px] w-[10px] rounded-full bg-yellow-500" />;
    case "high":
      return <div className="h-[10px] w-[10px] rounded-full bg-red-500" />;

    default:
      return <div className="h-[10px] w-[10px] rounded-full bg-slate-200" />;
  }
};
