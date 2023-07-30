import React, { FC, useState } from "react";
import { Button, Input } from "../../shared/ui";
import { useLogInMutation } from "../../shared/model/api/auth.api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../../shared/model/slices/auth.slice";
import { useNavigate } from "react-router";

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const [login] = useLogInMutation();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState("");
  function handleLogin() {
    login({ password: getValues().password, login: getValues().login })
      .unwrap()
      .then((authUser: any) => {
        if (authUser === null) {
          setLoginError("Неверный логин или пароль");
          return
        }
        dispatch(authActions.setUserFirstName(authUser?.firstName));
        dispatch(authActions.setUserLastName(authUser?.lastName));
        dispatch(authActions.setUserDescription(authUser?.description));
        dispatch(authActions.setUserImage(authUser?.image));
        dispatch(authActions.setUserId(authUser?.id));
        navigate("/");
      });
  }
  return (
    <div className="w-[100vw] h-[100vh] flex gap-[29px] relative left-0 top-0">
      <div className="m-auto left-0 right-0 bottom-0 top-0 absolute w-[400px] h-[300px] flex flex-col items-center gap-[30px]">
        <Input
          {...register("login", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Логин"
          error={errors?.login?.message as string}
        ></Input>
        <Input
          {...register("password", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Пароль"
          error={errors?.password?.message as string}
        ></Input>
        <span className="text-red-600 text-sm">{loginError}</span>
        <Button onClick={handleSubmit(handleLogin)} label="Войти"></Button>
      </div>
    </div>
  );
};

export default LoginPage;
