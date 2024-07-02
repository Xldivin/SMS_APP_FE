"use client";
import React, { useEffect } from "react";
import Logo from "../../src/assets/images/logo symbol-01 3.svg"
import image from '../../src/assets/images/83161c92ae52a10f49655a798baed5fc.jpeg'
import Link from 'next/link';
import RegisterAuthentication from "@/ui/signup/Register";
import Image from "next/image";

const Register = () => {
  useEffect(() => {
    document.documentElement.classList.add('light');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:h-screen max-sm:items-center sm:gap-8 lg:gap-20 bg-[#F5F5F5]">
      <div className="w-full h-screen max-sm:hidden">
        <Image
          width={100}
          height={100}
          alt="tuesday markets logo "
          src={image}
          className="w-full h-screen"
        />
      </div>
      <div className="flex flex-col justify-center max-sm:px-8 sm:px-8 lg:px-20 max-sm:items-center">
        <div className="flex items-center">
          <Link href="/register" className="flex items-center">
            <Image
              width={50}
              height={50}
              alt="tuesday markets logo"
              src={Logo}
              className="w-[50px] h-[50px]"
            />
            <h1 className="font-bold text-md font-sans ml-[-8px]">tuesday</h1>
          </Link>
        </div>
        <div className="w-full">
          <RegisterAuthentication />
        </div>
      </div>
    </div>
  );
};

export default Register;
