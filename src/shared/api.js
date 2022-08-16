import axios from "axios";
import { Cookies } from "react-cookie";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}/api`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token"); // localStorage에 TOKEN 저장
  config.headers.common["Authorization"] = `${accessToken}`; // Header에 토큰을 넣어서 보내준다.
  return config;
});

// 로그인/회원가입용 axios(토큰 필요 X)
const userAxios = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_SERVER}/api/users`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});
// 로그인/회원가입 요청 객체
export const userAuth = {
  login(loginData) {
    return userAxios.post("/login", loginData);
  },
  signup(signupData) {
    return userAxios.post("/signup", signupData);
  },
  emailValidation(email) {
    return userAxios.post(`/validation`, {
      email,
    });
  },
  useAccess(token) {
    // 유저정보 받아오기
    return userAxios.get(`/info`, {
      headers: {
        Authorization: token,
      },
    });
  },
};

// 모든 요청에서 엑세스 토큰이 만료되었을 경우 예외처리
userAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const {
      config,
      response: { status },
    } = err;
    // 토큰 만료됐을 때 status
    if (status === 500) {
      // userAxios를 쓰는 경우인데 리프레시 토큰 조차 없는 경우
      const cookies = new Cookies();
      if (cookies.get("refreshToken")) {
        return err;
      }

      // 이전 작업에 대한 config저장
      const originalReq = config;
      // Bearer제거 작업
      const getRefresh = cookies.get("refreshToken").split(" ")[1];
      const getAccess = localStorage.getItem("accessToken").split(" ")[1];

      // refresh요청
      const response = await userAxios.post(
        "/reissue",
        {},
        {
          headers: {
            AccessToken: getAccess,
            RefreshToken: getRefresh,
          },
        }
      );
      const newAccess = response.headers.authorization;
      localStorage.setItem("accessToken", newAccess);
      // 새로 발급 받은 토큰으로 config 변경
      originalReq.headers.Authorization = newAccess;
      return axios(originalReq);
    }
    return err;
  }
);

export const postsApi = {};