import { IReqOptions, IRequestParams } from "../types";

export const getParams = (
  url: string,
  options: IReqOptions | undefined
): any => {
  if (url.includes("?")) return splitParametersFromUrl(url);
  if (options?.params) return options.params;

  return null;
};

export const splitParametersFromUrl = (url: string): Object | null => {
  const splitEndpoint = url.split("?");
  const params = splitEndpoint[1];

  if (!params) return null;

  const paramsList = params?.split("&");
  return paramsList?.reduce((acc: any, param: string) => {
    const [key, value] = param.split("=");
    acc[key] = value;
    return acc;
  }, {});
};

export const generateLogId = (): string => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};
