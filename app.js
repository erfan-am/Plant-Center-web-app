const axios =require('axios')
const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
function getLocalAccessToken() {
    const accessToken = window.localStorage.getItem("accessToken");
    return accessToken;
  }
  function getLocalRefreshToken() {
    const refreshToken = window.localStorage.getItem("refreshToken");
    return refreshToken;
  }
  function refreshToken() {
    return instance.post("/token/refresh", {
      refreshToken: getLocalRefreshToken(),
    });
  }

  instance.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken();
      if (token) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await refreshToken();
            const { accessToken } = rs.data;
            window.localStorage.setItem("accessToken", accessToken);
            instance.defaults.headers.common["x-access-token"] = accessToken;
            return instance(originalConfig);
          } catch (_error) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
            return Promise.reject(_error);
          }
        }
        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
      }
      return Promise.reject(err);
    }
  );
  function signin() {
    return instance.post("/auth/signin", {
      username: "zkoder",
      password: "12345678",
    });
  }

  function getUserContent() {
    return instance.get("/test/user");
  }
  async function login() {
    var resultElement = document.getElementById("getResult1");
    resultElement.innerHTML = "";
    try {
      const res = await signin();
      const { accessToken, refreshToken } = res.data;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
      resultElement.innerHTML =
        "<pre>" +
        JSON.stringify({ accessToken, refreshToken }, null, 2) +
        "</pre>";
    } catch (err) {
      resultElement.innerHTML = err;
    }
  }
  async function getData() {
    var resultElement = document.getElementById("getResult2");
    resultElement.innerHTML = "";
    try {
      const res = await getUserContent();
      resultElement.innerHTML =
        "<pre>" + JSON.stringify(res.data, null, 2) + "</pre>";
    } catch (err) {
      resultElement.innerHTML = "<pre>" + JSON.stringify(err, null, 2) + "</pre>";
    }
  }
  function clearOutput1() {
    var resultElement = document.getElementById("getResult1");
    resultElement.innerHTML = "";
  }
  function clearOutput2() {
    var resultElement = document.getElementById("getResult2");
    resultElement.innerHTML = "";
  }