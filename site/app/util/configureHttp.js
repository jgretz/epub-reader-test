import {configureHttp as httpConfigure} from 'truefit-react-utils';
import {API_BASE_URL} from 'configs'; // eslint-disable-line

const DEFAULT_CONFIG = {
  defaultCacheTimeout: 30000,
  cacheGetRequests: true,
  baseURL: API_BASE_URL,
};

export const configureHttp = () => httpConfigure(DEFAULT_CONFIG);
