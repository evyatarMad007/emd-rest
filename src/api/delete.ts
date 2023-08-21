import createClient, { getHeaders } from '../client'; // assuming you have a file for the axios instance
import { handleError } from '../utils/handleError';
import { IReqOptions } from '../types';
import { logToLocal } from '../utils/localLogger';
import { REQ, RES } from '../constants';

export async function Delete(url: string, options?: IReqOptions, logData?: any) {
    try {
        const {method, logId} = logData
        const client = createClient(options);
        options?.showLogsInConsole && logToLocal.log({ type: REQ, method, logId, url, options, headers: getHeaders(client.defaults.headers) });
        const response = await client.delete(url);
        options?.showLogsInConsole && logToLocal.log({ type: RES, method, logId, url, options, response });
        return response;
    } catch (error) {
        handleError(error);
    }
}

export default Delete;