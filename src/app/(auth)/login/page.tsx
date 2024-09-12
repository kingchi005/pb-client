"use client";
import { useEffect, useLayoutEffect, useState, useId } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";

import { loginSchema } from "@/components/forms/formValidationSchema";
import { useFormik } from "formik";
import Image from "next/image";

import { Button, Loader, Overlay, TextField } from "@/components";
import { getSession, loginAdmin } from "@/lib/axios/requests";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  // const loginToken = getCookie("loginToken");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();
  const uniqueId = useId();

  useEffect(() => {
    getSession()
      .then((data) => {
        console.log(data);
        if (data.data.message === "Authenticated") {
          router.push("/admin/dashboard");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [router]);

  // const { isUser, loading } = useAuth();

  // useEffect(() => {
  //   if (isUser && !loading) {
  //     redirect("/admin/dashboard");
  //   }
  // }, [isUser, loading]);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      setIsSubmitting(true);

      loginAdmin(values)
        .then((data) => {
          console.log(data);
          router.replace("/admin/dashboard");
        })
        .catch((err) => {
          if (err.message === "Network Error") {
            toast.error(err.message);
          } else {
            toast.error("invalid email or password", { duration: 5000 });
          }
        })
        .finally(() => setIsSubmitting(false));
    },
  });

  const setLoginButtonToInvalid = () => {
    if (
      formik.errors.email ||
      formik.errors.password ||
      !formik.values.email ||
      !formik.values.password
    ) {
      return true;
    }
  };

  if (isLoading)
    return (
      <Overlay>
        <Loader />
      </Overlay>
    );

  // if (isUser) return router.replace("/admin/dashboard");

  return (
    <main className="mx-auto flex min-h-screen w-11/12 flex-col justify-center font-inter md:w-2/3 lg:w-1/3">
      <Image
        src="/images/logo.jpg"
        alt="app logo"
        height={100}
        width={100}
        priority
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        className="my-[2rem]"
      />

      <h2 className="font-lexend text-2xl font-bold">Welcome 👋 </h2>

      <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4">
        <TextField
          {...formik.getFieldProps("email")}
          label="email address"
          type="email"
          placeholder="email"
          autoComplete="email"
          error={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />
        <TextField
          {...formik.getFieldProps("password")}
          label="Password"
          type="password"
          placeholder="password"
          error={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
        />

        <Button
          type="submit"
          size="fullwidth"
          disabled={setLoginButtonToInvalid()}
        >
          Login
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={checked}
            id=""
            className="h-4 w-4 cursor-pointer checked:accent-primary"
            onChange={() => setChecked((prev) => !prev)}
          />
          <p>Remember Me</p>
          <Link
            href={"/reset-password"}
            className="ml-auto text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>

      {isSubmiting ? (
        <Overlay>
          <Loader />
        </Overlay>
      ) : null}
    </main>
  );
}
