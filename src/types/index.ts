import { AxiosRequestConfig } from "axios";

export interface IRestHelper {
  get: (url: string, options?: IReqOptions ) => Promise<any>;
  delete: (url: string, options?: IReqOptions) => Promise<any>;
  post: (url: string, reqBody: any,  options?: IReqOptions) => Promise<any>;
  put: (url: string, reqBody: any, options?: IReqOptions) => Promise<any>;
  patch: (url: string, reqBody: any, options?: IReqOptions) => Promise<any>;
}

export interface IReqOptions extends AxiosRequestConfig {
  showLogsInConsole?: boolean;
  flg?: string;
}

export type IRequestParams = Record<string, any>;

export interface IError {
  response?: {
    status: number;
    data: { message?: string };
  };
  request?: any;
  message: string;
}

export * from "./logs.interface";


