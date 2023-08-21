import axios, { AxiosInstance } from "axios";
import { IReqOptions } from "./types";

const createClient = (options?: IReqOptions): AxiosInstance => {
  const defaultFlg = options?.flg || "hTdvjbUfglEdlfKm";
  const defaultHeaders = options?.headers || {
    "Content-Type": "application/json",
    "hrlfg": defaultFlg,
  };

  return axios.create({
    headers: defaultHeaders,
    ...options,
  });
};

export const getHeaders = (fullHeaders: any) => {
  const headersToExclude = ["get", "post", "put", "patch", "delete", "head", "common"];
  const desiredHeaders = Object.entries(fullHeaders)
    .filter(([key]) => !headersToExclude.includes(key))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  return desiredHeaders;
};

export default createClient;
