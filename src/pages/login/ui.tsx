import React, { FC, useEffect, useState } from "react";
import { Button, Input, Loading } from "../../shared/ui";
import { useLogInMutation } from "../../shared/model/api/auth.api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../../shared/model/slices/auth.slice";
import { useNavigate } from "react-router";
import { User } from "../../shared/model/types/users.types";

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLogInMutation();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState("");
  function handleLogin() {
    login({ password: getValues().password, login: getValues().login })
      .unwrap()
      .then((authUser: any) => {
        if (authUser === null) {
          setLoginError("Неверный логин или пароль");
          return;
        }
        dispatch(authActions.setUserFirstName(authUser?.firstName));
        dispatch(authActions.setUserLastName(authUser?.lastName));
        dispatch(authActions.setUserDescription(authUser?.description));
        dispatch(authActions.setUserImage(authUser?.image));
        dispatch(authActions.setUserId(authUser?.id));
        setStorageUser(authUser);
        navigate("/");
      });
  }
  useEffect(() => {
    setLoginError("");
  }, [watch().login, watch().password]);

  function setStorageUser(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-[100vw] h-[100vh] flex gap-[29px] relative left-0 top-0">
          <div className="m-auto left-0 right-0 bottom-0 top-0 absolute w-[400px] h-[300px] flex flex-col items-center">
            <div className="mb-[30px] w-full">
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
            </div>
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
            <span className="text-red-600 text-sm mt-[20px] mb-[10px]">
              {loginError}
            </span>
            <Button onClick={handleSubmit(handleLogin)} label="Войти"></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
