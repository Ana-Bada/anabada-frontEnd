import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../shared/api";
import { Cookies } from "react-cookie";
import { userThunk } from "../redux/auth-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const onSumbit = async (loginData) => {
    try {
      const getResponse = await userAuth.login(loginData);
      // 토큰 저장
      cookies.set("refreshToken", getResponse.headers.refreshtoken);
      localStorage.setItem("accessToken", getResponse.headers.authorization);

      // 유저 정보 받아오기
      const getAccessToken = localStorage.getItem("accessToken");
      dispatch(userThunk(getAccessToken));
      navigate("/");
      return alert("로그인에 성공했습니다!");
    } catch (err) {
      console.log(err);
      return alert("이메일과 비밀번호를 확인해주세요!");
    }
  };
  const onError = (err) => {
    return console.log(err);
  };

  // 로그인한 상태에서 접근 시 차단
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      alert("비정상적인 접근입니다.");
      return navigate("/");
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSumbit, onError)}>
        <input
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력해주세요!",
            pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
          })}
        ></input>
        {errors.email?.type === "required" && (
          <span>{errors.email.message}</span>
        )}
        {errors.email?.type === "pattern" && (
          <span>형식에 맞게 메일 주소를 입력하세요.</span>
        )}
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password", { required: "비밀번호를 입력해주세요!" })}
        ></input>
        {errors.password?.type === "required" && (
          <span>{errors.password.message}</span>
        )}
        <button>로그인</button>
      </form>
    </>
  );
};

export default Login;