import React from "react";
import FormControl from "../FormControl";
import FormInput from "../FormInput";
import GGButton from "../GGButton";
import SelectInput from "../SelectInput";
import Spinner from "../dashboard/utilscomponent/Spinner";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { loginUser } from "@/store/slices";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { countries } from "@/lib/constant";
import { useLoginWithPhoneMutation } from "@/store/api";
import Cookies from 'js-cookie';
import Image from "next/image";

const PhoneLogin = () => {
  const router = useRouter();
  const [loginWithPhone, { isLoading }] = useLoginWithPhoneMutation();
  const dispatch = useDispatch();

  const initialData = {
    phone: "",
    password: "",
    country: "",
  };
  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    // validationSchema: LoginValidation,

    onSubmit: async () => {
      try {
        const fullPhoneNumber = `${values.country}${values.phone}`;
        const res:any = await loginWithPhone({
          phone: fullPhoneNumber,
          password: values.password,
        }).unwrap();

        Cookies.set('accessToken', res.token);

        dispatch(
          loginUser({
            accessToken: res.token,
            refreshToken: res.refreshToken,
            userName: res?.username?.username,
            userEmail: res?.user?.email,
            userId: res?.user?.id,
          })
        );
        toast.success("Login successful");
        router.push('/dashboard');
      } catch (error) {
        toast.error("Invalid phone number or passcode");
        values.password = "";
      }
    },
  });

  const isReady = !values.phone || !values.password || !values.country;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="">
          <FormControl>
            <SelectInput
              name="country"
              label="Country Code"
              placeholder="Select Country Code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country}
              value={values.country}
            >
              <option value="">Select Country Code</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  <Image
                    width={5}
                    height={5}
                    className="w-5 h-5"
                    src={country.flag}
                    alt={country.country}
                  />
                  {country.code}
                </option>
              ))}
            </SelectInput>
          </FormControl>
        </div>
        <div className="col-span-2">
          <FormControl>
            <FormInput
              name="phone"
              label="Phone Number"
              type="text"
              placeholder="745639852"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              value={values.phone}
            />
          </FormControl>
        </div>
      </div>
      <FormControl>
        <FormInput
          name="password"
          label="Pass Code"
          type="password"
          placeholder="Enter pass code"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          value={values.password}
        />
      </FormControl>
      <GGButton type="submit" disable={isLoading || isReady}>
        <span className="font-sans font-bold">
          {isLoading ? <Spinner /> : "Sign In"}
        </span>
      </GGButton>
      <div className="mt-2 flex items-center gap-2 flex-wrap justify-between">
        <p className="text-gray-800/50 font-sans text-nowrap">
          Don&apos;t have an account?
          <Link href="/register" className="text-[#0177fd] ml-1">Sign Up</Link>
        </p>
        <p className="text-gray-800/50 font-sans text-nowrap">
          <Link href="/phone-recover" className="text-[#0177fd] ml-1">Lost Phone Number?</Link>
        </p>
        <p className="text-gray-800/50 font-sans text-nowrap">
          <Link href="/phone-reset-pass-code" className="text-[#0177fd] ml-1">Lost PassCode?</Link>
        </p>
      </div>
    </form>
  );
};

export default PhoneLogin;
