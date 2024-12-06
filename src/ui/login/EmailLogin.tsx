import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import FormControl from "../FormControl";
import FormInput from "../FormInput";
import GGButton from "../GGButton";
import Spinner from "../dashboard/utilscomponent/Spinner";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import Link from 'next/link';

const EmailLogin = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState('false');

  const initialData = {
    username: "",
    password: ""
  };

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    // validationSchema: LoginValidation,

    onSubmit: async () => {
      try {
        setIsloading('true')

        const response = await fetch('http://localhost:8081/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Invalid email or password");
        }

        const data = await response.json();

        // Simulate successful login
        Cookies.set('accessToken', data.token);

        toast.success("Login successful");
        router.push('/dashboard');
      } catch (error: any) {
        toast.error(error);
      } finally {
        setIsloading("false")
      }
    },
  });

  const isReady = !values.username;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FormControl>
        <FormInput
          name="username"
          label="Username"
          type="username"
          placeholder="Enter username"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
          value={values.username}
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter valid password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          value={values.password}
        />
      </FormControl>
      <GGButton type="submit" disable={isReady}>
        <span className="font-sans font-bold">
          {isloading ? "Sign In" : <Spinner />}
        </span>
      </GGButton>
      <div>
        <p className="text-gray-800/50 font-sans">
          Don&apos;t have the account Signup?{" "}
          <Link href="/signup" className="text-[#0177fd]">
            SignUp
          </Link>
        </p>
      </div>
    </form>
  );
};

export default EmailLogin;
