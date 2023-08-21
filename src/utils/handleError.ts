import { ERR } from '../constants';
import { IError } from '../types';
import { logToLocal } from './localLogger';

export function handleError(error: IError | any, logId?: string): never {
    logToLocal.error({type: ERR, error, logId});

    throw error;
}

