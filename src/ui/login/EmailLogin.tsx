import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import FormControl from "../FormControl";
import FormInput from "../FormInput";
import GGButton from "../GGButton";
import Spinner from "../dashboard/utilscomponent/Spinner";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const EmailLogin = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState('false');

  const initialData = {
    email: "",
  };

  const simulateLogin = (email:any) => {
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmailRegex.test(email);
  };

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    // validationSchema: LoginValidation,

    onSubmit: async () => {
      try {
        setIsloading('true')
        const isValidEmail = simulateLogin(values.email);
        
        if (!isValidEmail) {
          throw new Error("Invalid email");
        }

        // Simulate successful login
        Cookies.set('accessToken', 'fakeToken');

        toast.success("Login successful");
        router.push('/dashboard');
      } catch (error) {
        toast.error("Invalid email");
      } finally{
        setIsloading("false")
      }
    },
  });

  const isReady = !values.email ;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FormControl>
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter valid email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          value={values.email}
        />
      </FormControl>
      <GGButton type="submit" disable={isReady}>
        <span className="font-sans font-bold">
          {isloading ? "Sign In" : <Spinner />}
        </span>
      </GGButton>
    </form>
  );
};

export default EmailLogin;
