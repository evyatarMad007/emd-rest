import {
  IErrorLogs,
  ILogData,
  ILogErrData,
  ILogToLocal,
  IReqLogs,
  IResLogs,
} from "../types";
import { getParams } from "./utils";
import { figletText } from "../lib/figlet";
import colors from "colors";
import { ERR, REQ, RES } from "../constants";

const createLogger = async (data: any) => {
  let color: any;
  let icon: string;

  if( !data ) return "No data to log";

  if (data.type === REQ) {
    color = colors.cyan;
    icon = "🔵";
  }
  if (data.type === RES) {
    color = colors.green;
    icon = "🟢";
  }
  if (data.type === ERR) {
    color = colors.red;
    icon = "🔴";
  }

  const logArray = [];
  for (const key in data) {
    if (key === "type") continue;
    logArray.push({ [key]: data[key as keyof typeof data] });
  }

  await figletText(data);
  logArray.forEach((logData) => {
    const key = Object.keys(logData)[0];
    const value = logData[key];
    console.log(
      icon,
      color(`${data.type}`),
      "-",
      colors.yellow(key + ":"),
      value
    );
  });
  console.log(
    color(
      `______________________________________________________________________`
    )
  );
  console.log("");
  return;
};

const generateLogData = ( logData: ILogData ): IReqLogs | IResLogs | null => {
  if (logData.type === REQ) {
    return {
      reqLogId: logData.logId,
      url: logData.url,
      type: logData.type,
      method: logData.method,
      queryParams: getParams(logData.url, logData.options),
      headers: logData.headers,
      requestBody: logData.reqBody ? logData.reqBody : null,
    };
  }

  if (logData.type === RES) {
    return {
      resLogId: logData.logId,
      type: logData.type,
      status: logData.response ? logData.response?.status : 0,
      response: logData.response?.data ? logData.response.data : null,
    };
  }

  return null;
};

const generateErrLogData = ( logData: ILogErrData): IErrorLogs | null => {

  if (logData.type === ERR) {
    if (logData.error?.response) {
      return {
        type: logData.type,
        errorLogId: logData?.logId,
        status: logData.error.response.status,
        data: JSON.stringify(logData.error.response.data),
        errorMessage: logData.error.message,
      };
    } else if (logData.error?.request) {
      return {
        type: logData.type,
        errorLogId: logData.logId,
        errorMessage: logData.error.message,
      };
    }
  }

  return null;
};

export const logToLocal: ILogToLocal = {
  log: (logData: ILogData) => createLogger(generateLogData(logData)),
  error: (logData: ILogErrData) => createLogger(generateErrLogData(logData)),
};
