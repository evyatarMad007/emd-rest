export interface IRestHelper {
    get: (url: string, options?: IReqOptions) => Promise<any>;
    delete: (url: string, options?: IReqOptions) => Promise<any>;
    post: (url: string, reqBody: any, options?: IReqOptions) => Promise<any>;
    put: (url: string, reqBody: any, options?: IReqOptions) => Promise<any>;
    patch: (url: string, reqBody: any, options?: IReqOptions) => Promise<any>;
}
export interface IReqOptions {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    httpAgent?: any;
    flg?: string;
    timeout?: number;
}
export type IRequestParams = Record<string, any>;
export interface IError {
    response?: {
        status: number;
        data: {
            message?: string;
        };
    };
    request?: any;
    message: string;
}
export * from "./logs.interface";
