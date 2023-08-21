import createClient, { getHeaders } from '../client'; // assuming you have a file for the axios instance
import { handleError } from '../utils/handleError';
import { IReqOptions } from '../types';
import { REQ, RES } from '../constants';
import { logToLocal } from '../utils/localLogger';

export async function Put(url: string, reqBody?: any, options?: IReqOptions, logData?: any) {
    try {
        const {method, logId} = logData
        const client = createClient(options);
        options?.showLogsInConsole && logToLocal.log({ type: REQ, method, logId, url, options, reqBody, headers: getHeaders(client.defaults.headers) });
        const response = await client.put(url, reqBody);
        options?.showLogsInConsole && logToLocal.log({ type: RES, method, logId, url, options, response });
        return response;
    } catch (error) {
        handleError(error);
    }
}

export default Put;