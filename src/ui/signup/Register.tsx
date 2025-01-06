import React, { useState } from "react";
import FormControl from "../FormControl";
import FormInput from "../FormInput";
import GGButton from "../GGButton";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Spinner from "../dashboard/utilscomponent/Spinner";

const SectionHeader = ({
  title,
}: {
  title: string;
}) => {
  return (
    <div className="py-6 pb-4 max-sm:text-center">
      <h1 className="text-md font-bold font-sans">{title}</h1>
    </div>
  );
};

const RegisterAuthentication = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState('false');
  const [title, setTitle] = useState("Let’s get started!");

  const initialData = {
    username: "",
    email: "",
    password: "",
  };

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    onSubmit: async () => {
      try {
        setIsloading('true')

        const response = await fetch('https://sms-app-r1uh.onrender.com/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Invalid email or password");
        }

        toast.success("Signup successful");
        router.push('/login');
      } catch (error: any) {
        toast.error(error.data.message);
      } finally {
        setIsloading("false")
      }
    },
  });



  return (
    <div className="w-full">
      <div className="flex flex-col mb-6 gap-3">
        <SectionHeader title={title} />
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
              <FormControl>
                <FormInput
                  name="username"
                  label="Username"
                  type="username"
                  placeholder="Joe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username}
                  value={values.username}
                />
              </FormControl>
              <FormControl>
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  value={values.email}
                />
              </FormControl>
              <FormControl>
                <FormInput
                  name="password"
                  label="Passwrd"
                  type="password"
                  placeholder="*************"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  value={values.password}
                />
              </FormControl>
            <GGButton
              type="submit"
            >
              <span className="font-sans font-bold">
              {isloading ? "Sign Up" :  <Spinner /> }
              </span>
            </GGButton>
            <div>
              <p className="text-gray-800/50 font-sans">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0177fd]">
                  Log In
                </Link>
              </p>
            </div>
      </form>
    </div>
  );
};

export default RegisterAuthentication;
