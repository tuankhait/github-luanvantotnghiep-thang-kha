import axios from 'axios';
import _ from 'lodash';
import {mapData, mapError} from './mapData';
import { baseURL } from "./BaseURL";
const CancelToken = axios.CancelToken;

const addParams = (url, params) => {
  url += `?`;
  _.keys(params).forEach(value => {
    url += `${value}=${params[value]}`;
  });
  return url;
};

export default class Request {
  constructor() {
    this.api = axios.create({
      baseURL:baseURL.public,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setToken(token) {
    this.api.defaults.headers.common.Authorization = token ?  `Bearer ${token}` : '';
  }

  get(url, config = {}, queryParams = {}) {
    let cancel;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken(c => (cancel = c)),
    };
    const request = this.api
      .get(addParams(url, queryParams), apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  }

  post(url, body, config = {}, queryParams = {}) {
    let cancel;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken(c => (cancel = c)),
    };
    const request = this.api
      .post(
        addParams(url, queryParams),
        _.assign({}, body),
        apiConfig,
      )
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  }

  put(url, body, config = {}, queryParams = {}) {
    let cancel;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken(c => (cancel = c)),
    };
    const request = this.api
      .put(
        addParams(url, queryParams),
        _.assign({}, queryParams, body),
        apiConfig,
      )
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  }

  patch(url, body, config = {}, queryParams = {}) {
    let cancel;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken(c => (cancel = c)),
    };
    const request = this.api
      .patch(
        addParams(url, queryParams),
        _.assign({}, queryParams, body),
        apiConfig,
      )
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  }

  delete(url, config = {}, queryParams = {}) {
    let cancel;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken(c => (cancel = c)),
    };
    const request = this.api
      .delete(addParams(url, queryParams), apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  }
}
