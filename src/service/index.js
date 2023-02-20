import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeURYWWxsRERUbHJLUTdtNE5ENVltUjBobmdyd1Zmck5DIiwiZXhwIjoxNzA4Mjg0NTk0LCJpYXQiOjE2NzY3NDg1OTQsImp0aSI6ImFwa19yeURYWWxsR0d5RmdXU2JXZldxVGtoczNkWVF6RGtkcUNOIiwibW9kZSI6InBhcGVyIn0.m5rem9XTx3P3PGo-8wN_G4x7Qe38qqbMGkn1ocxi32Y",
    "Content-Type": "application/json",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
