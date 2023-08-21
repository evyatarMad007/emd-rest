import { handleError } from "./utils/handleError";
import { IReqOptions, IRestHelper } from "./types";
import getReq from "./api/get";
import postReq from "./api/post";
import putReq from "./api/put";
import deleteReq from "./api/delete";
import patchReq from "./api/patch";
import { generateLogId } from "./utils/utils";

const RestHelper: IRestHelper = {
  get: async (url: string, options?: IReqOptions) => {
    const logId = generateLogId();
    try {
      return await getReq(url, options, { method: "GET", logId });
    } catch (error) {
      handleError(error, logId);
    }
  },
  post: async (url: string, reqBody?: any, options?: IReqOptions) => {
    const logId = generateLogId();
    try {
      return await postReq(url, reqBody, options, { method: "POST", logId });
    } catch (error) {
      handleError(error, logId);
    }
  },
  put: async (url: string, reqBody?: any, options?: IReqOptions) => {
    const logId = generateLogId();
    try {
      return await putReq(url, reqBody, options, { method: "PUT", logId });
    } catch (error) {
      handleError(error, logId);
    }
  },
  delete: async (url: string, options?: IReqOptions) => {
    const logId = generateLogId();
    try {
      return await deleteReq(url, options, { method: "DELETE", logId });
    } catch (error) {
      handleError(error, logId);
    }
  },
  patch: async (url: string, reqBody?: any, options?: IReqOptions) => {
    const logId = generateLogId();
    try {
      return await patchReq(url, reqBody, options, { method: "PATCH", logId });
    } catch (error) {
      handleError(error, logId);
    }
  },
};

export default RestHelper;
