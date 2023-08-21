import { IReqOptions } from ".";

export interface IReqLogs {
    reqLogId: string;
    type: "Request" | "Response";
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    url: string;
    headers?: IHeaders | null;
    queryParams: string
    requestBody?: string;
  }
  
  export interface IResLogs {
    type: "Request" | "Response";
    resLogId: string;
    response?: string;
    status: number;
  }
  
  export interface IErrorLogs {
    type: "Error";
    errorLogId?: string;
    data?: string;
    status?: number;
    errorMessage: string;
  }
  
  export interface ILogErrData {
    type: "Request" | "Response" | "Error";
    logId: string | undefined;
    error?: any;
  }

  export interface  IHeaders {
    [key: string]: string;
  }
  
  export interface ILogData {
    type: "Request" | "Response" | "Error";
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    url: string;
    headers?: IHeaders,
    options?: IReqOptions;
    reqBody?: any;
    logId: string;
    response?: any;
  }
  
  export interface ILogToLocal {
    log: (logData: ILogData) => void;
    error: (logData: ILogErrData) => void;
  }