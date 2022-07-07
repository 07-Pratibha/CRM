import axios from 'axios';
// import qs from 'querystring';

// const token = localStorage.getItem('token');

export function generateUrl(url, path) {
  if (path.includes('http')) {
    return path;
  }
  return url + path;
}

export function apiReq(endPoint, data, method, headers, requestOptions = {}, config = {}) {
  return new Promise((res, rej) => {
    headers = {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        params: { ...data },
        paramsSerializer: function(params) {
          // return qs.stringify(params);
        },
        headers,
      };
    }

    let updatedData = data instanceof FormData ? data : { ...data };

    axios[method](endPoint, updatedData, { headers, ...config })
      .then(result => {
        let { data } = result;

        const { status } = data;
        if (result.status === 500) {
          return rej(data);
        }

        if (status === 200) {
          return res(data);
        }

        if (status === 201) {
          return res(data);
        }

        if (status === 205) {
          return res(data);
        }
        if (status === 401) {
          return rej(data);
        }
        return res(data);
      })
      .catch(err => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message &&
          err.response.data.message === 'Wrong number of segments'
        ) {
          // logOut();
          window.location.href = '/';
          return;
        }
        return rej(err);
      });
  });
}

export function apiPost(url, endPoint, data, config = {}) {
  return apiReq(generateUrl(url, endPoint), data, 'post', {}, config);
}

export function apiDelete(url, endPoint, data) {
  return apiReq(generateUrl(url, endPoint), data, 'delete');
}

export function apiGet(url, endPoint, data, requestOptions) {
  return apiReq(generateUrl(url, endPoint), data, 'get', requestOptions);
}

export function apiPut(url, endPoint, data) {
  return apiReq(generateUrl(url, endPoint), data, 'put');
}

