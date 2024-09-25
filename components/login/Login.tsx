"use client";
import React, { useEffect } from "react";
import { Alert, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import {
  selectGlobal,
  setLoading,
  setResponse,
} from "@/redux/features/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSession, signIn } from "next-auth/react";

const Login = () => {
  const global = useSelector(selectGlobal);
  // hook
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const session: any = await getSession();
      if (session?.status === "authenticated") {
        router.replace("/");
      }
    })();
  }, [dispatch, router]);

  const handleSubmit = async (values: any) => {
    dispatch(setLoading({ save: true }));
    try {
      let newData = { ...values };
      // return console.log("newData:", newData);
      const result: any = await signIn("credentials", {
        ...newData,
        redirect: false,
      });
      const getSesson: any = await getSession();

      if (result.status === 401) {
        dispatch(setResponse({ type: "error", message: result.error }));
      }
      if (getSesson?.user?.role === "Admin" && result?.status === 200) {
        router.push("/dashboard");
        return;
      }

      if (getSesson?.user?.role === "User" && result?.status === 200) {
        router.push("/");
        return;
      }

      setTimeout(async () => {
        dispatch(setLoading({ save: false }));
      }, 1000);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        autoComplete="off"
        scrollToFirstError={true}
      >
        <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to site! Please login.
            </h2>

            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Username is required",
                },
              ]}
            >
              <Input
                placeholder="Enter "
                onInput={() => dispatch(setResponse({}))}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter "
                onInput={() => dispatch(setResponse({}))}
              />
            </Form.Item>
            {global.response.type && (
              <div className="pb-3">
                <Alert
                  className="m-0"
                  message={`${global.response.message}`}
                  type={global.response.type}
                />
              </div>
            )}
            <Button
              // size="small"
              className="w-full"
              type="primary"
              htmlType="submit"
              // className="capitalize"
              loading={global.loading.save}
            >
              Login
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
