import React, { useEffect, useState } from "react";
import FormControl from "../FormControl";
import FormInput from "../FormInput";
import GGButton from "../GGButton";
import SelectInput from "../SelectInput";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { toast } from "react-toastify";
import { useRegisterMutation, useSendPhoneOtpMutation, useVerifyPhoneOtpMutation } from "@/store/api";
import { useFormik } from "formik";
import Spinner from "../dashboard/utilscomponent/Spinner";
import Image from "next/image";
import { countries } from "@/lib/constant";
import TProgressBar from "../dashboard/utilscomponent/ProgressBar";
import UG from "../../assets/icons/UG Uganda.svg"
import Cookies from 'js-cookie';

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="py-6 pb-4 max-sm:text-center">
      <h1 className="text-md font-bold font-sans">{title}</h1>
      <p className="text-gray-800/50">{description}</p>
    </div>
  );
};

const RegisterAuthentication = () => {
  const [sendPhoneOtp, { isLoading: codeIsLoading }] =
    useSendPhoneOtpMutation();

  const [verifyPhoneOtp, { isLoading: verifyCodeIsLoading }] =
    useVerifyPhoneOtpMutation();
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [verificationCode, setVerificationCode] = useState("");
  const [description, setDescription] = useState(
    "Enter your phone number. We will send you an OTP"
  );
  const [title, setTitle] = useState("Let’s get started!");

  const [register, { isLoading }] = useRegisterMutation();

  const initialData = {
    email: "",
    passCode: "",
    country: "",
    phone: "",
    name: "",
    confPassword: "",
    code: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    city: "",
    recoveryEmail: "",
    gender: "",
    occupation: "",
    address: "",
  };

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    // validationSchema: LoginValidation,
    onSubmit: async () => {
      try {
        await register({
          phone: values.phone,
          email: values.email,
          password: values.passCode,
          country_code: values.country,

          gender: values.gender,
          occupation: values.occupation,
          country: values.country,
          city: values.city,
          address: values.address,
          first_name: values.firstName,
          last_name: values.lastName,
        }).unwrap();
        toast.success("Account Created successfully");
        setStep(1);
        router.push('/login');
      } catch (error: any) {
        // Explicitly type 'error' as 'any'
        toast.error(error.data.message);
      }
    },
  });

  const sendCodeHandler = async () => {
    try {
      const code = values.country;
      const email = values.email;
      const phoneNumber = code + values.phone;
      const sendValues = {
        phone: phoneNumber,
        email: email
      };
      await sendPhoneOtp(sendValues);
      toast.success("Verification code sent to your phone number");
      setTitle("Enter the 6 digit code");
      setDescription(`Enter the 6 digit code sent to ${phoneNumber}`);
      setStep(2);
    } catch (error: any) {
      // Explicitly type 'error' as 'any'
      toast.error(error.message);
    }
  };

  const verifyCode = async () => {
    try {
      await verifyPhoneOtp({ otp_code: verificationCode }).unwrap();

      toast.success("Phone number verified successfully");
      setTitle("Add personal details");
      setDescription("Enter your name and email address");
      setStep(3);
    } catch (error: any) {
      // Explicitly type 'error' as 'any'
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setVerificationCode(values.code);
  }, [values.code]);

  const previousHandler = (
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setTitle((prev) => prev);
    setStep(step - 1);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col mb-6 gap-3">
        <SectionHeader title={title} description={description} />
        <TProgressBar step={step} steps={5} />
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <div>
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
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="">
                <FormControl>
                  <SelectInput
                    name="country"
                    label="Country Code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.country}
                    value={values.country}
                  >
                    <option value="">Select Country Code</option>
                    <option value="+256" className="flex ">
                      <Image
                        src={UG}
                        alt="uganda"
                        className="w-10 h-10"
                        width={10}
                        height={10}
                        style={{ backgroundImage: `url(${UG})` }}
                      />{" "}
                      uganda
                    </option>

                    {countries.map((country) => (
                      <>
                        <option
                          key={country.code}
                          value={country.code}
                          style={{ backgroundImage: `${country.flag}` }}
                        >
                          {country.code}
                        </option>
                      </>
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
            <GGButton
              type="button"
              onClick={sendCodeHandler}
              disable={!values.phone || codeIsLoading}
            >
              <span className="font-sans font-bold">
                {codeIsLoading ? <Spinner /> : "Continue"}
              </span>
            </GGButton>
            <div id="reButton"></div>
            <div>
              <p className="text-gray-800/50 font-sans">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0177fd]">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <FormControl>
              <FormInput
                name="code"
                label="Code"
                type="text"
                placeholder="1234"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.code}
                value={values.code}
              />
            </FormControl>
            <div>
              <p className="text-[#0177fd] mb-4">Code Expires in 20s</p>
              <p className="text-gray-800/50 font-sans">
                Didn&apos;t receive the code?{" "}
                <span
                  className="text-[#0177fd] cursor-pointer"
                  onClick={sendCodeHandler}
                >
                  {codeIsLoading ? "Resending..." : "Resend"}
                </span>
              </p>
              <div id="reButton"></div>
            </div>
            <div className="flex items-center justify-between my-6">
              <button
                className="text-[#0177fd] flex items-center gap-2"
                onClick={() => previousHandler(step, setStep)}
              >
                <GoArrowLeft />
                Previous
              </button>
              <button
                disabled={!values.code || verifyCodeIsLoading}
                type="button"
                onClick={verifyCode}
                className="font-sans font-bold text-md bg-[#0177fd] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                {" "}
                {verifyCodeIsLoading ? <Spinner /> : "Verify"}
                <GoArrowRight />
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <FormControl>
              <FormInput
                name="firstName"
                label="First Name"
                type="text"
                placeholder="John"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={errors.firstName}
              />
            </FormControl>
            <FormControl>
              <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                value={values.lastName}
              />
            </FormControl>
            <FormControl>
              <FormInput
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.dateOfBirth}
                value={values.dateOfBirth}
              />
            </FormControl>
            <FormControl>
              <SelectInput
                name="gender"
                label="Gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </SelectInput>
            </FormControl>

            <FormControl>
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="name@example"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                value={values.email}
                readOnly
              />
            </FormControl>
            <FormControl>
              <FormInput
                name="recoveryEmail"
                label="Recovery Email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.recoveryEmail}
                value={values.recoveryEmail}
              />
            </FormControl>
            <div className="flex items-center justify-between my-6">
              <button
                className="text-[#0177fd] flex items-center gap-2"
                onClick={() => previousHandler(step, setStep)}
              >
                <GoArrowLeft />
                Previous
              </button>
              <button
                type="button"
                onClick={() => {
                  setTitle("Add contact details");
                  setStep(4);
                }}
                disabled={!values.firstName || !values.lastName}
                className="font-sans font-bold text-md bg-[#0177fd] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                Next
                <GoArrowRight />
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <FormControl>
              <FormInput
                name="occupation"
                label="Occupation"
                type="text"
                placeholder="Software Engineer"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.occupation}
                value={values.occupation}
              />
            </FormControl>

            <FormControl>
              <SelectInput
                name="country"
                label="Country Of Residence"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.country}
                value={values.country}
                readOnly
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    <Image
                      width={5}
                      height={5}
                      className="w-5 h-5"
                      src={country.flag}
                      alt={country.country}
                    />
                    {country.country}
                  </option>
                ))}
              </SelectInput>
            </FormControl>
            <FormControl>
              <FormInput
                name="city"
                label="City"
                type="text"
                placeholder="Lagos"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.city}
                value={values.city}
              />
            </FormControl>
            <FormControl>
              <FormInput
                name="address"
                label="Address"
                type="text"
                placeholder="123, Main Street, Lagos"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.address}
                value={values.address}
              />
            </FormControl>
            <div className="flex items-center justify-between my-6">
              <button
                className="text-[#0177fd] flex items-center gap-2"
                onClick={() => previousHandler(step, setStep)}
              >
                <GoArrowLeft />
                Previous
              </button>
              <button
                type="button"
                onClick={() => {
                  setTitle("Create a pass code");
                  setStep(5);
                }}
                className="font-sans font-bold text-md bg-[#0177fd] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                Next
                <GoArrowRight />
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <FormControl>
              <FormInput
                name="passCode"
                label=" Create Pass code"
                type="password"
                placeholder="Enter pass code"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.passCode}
                value={values.passCode}
              />
            </FormControl>
            <FormControl>
              <FormInput
                name="confPassword"
                label="Confirm Pass Code"
                type="password"
                placeholder="Confirm pass code"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confPassword}
                value={values.confPassword}
              />
            </FormControl>
            <div className="flex items-center justify-between my-6">
              <button
                className="text-[#0177fd] flex items-center gap-2"
                onClick={() => previousHandler(step, setStep)}
              >
                <GoArrowLeft />
                Previous
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="font-sans font-bold text-md bg-[#0177fd] text-white px-4 py-2 rounded-md  flex items-center gap-2"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterAuthentication;
