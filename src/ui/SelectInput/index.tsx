import React from "react";
import { type FormikErrors } from "formik/dist/types";

interface InputProps {
  name: string;
  children: React.ReactNode;
  value?: string | number;
  placeholder?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  required?: boolean;
  error?:
    | string
    | undefined
    | string[]
    | FormikErrors<any>
    | Array<FormikErrors<any>>
    | undefined;
  readOnly?: boolean;
}

const SelectInput = ({
  name,
  children,
  label,
  onChange,
  onBlur,
  value,
  required,
  readOnly,
  error,
}: InputProps) => {
  return (
    <>
      {" "}
      <label className="block relative">
        <span className="block field-label text-textColor capitalize">
          {label}
        </span>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={readOnly}
          className={`${
            error != null && "border-error text-error"
          } text-[#000] font-poppins mt-1 px-3 py-2.5 bg-white border shadow-sm border-[#E2E1E1] placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 `}
        >
          {children}
        </select>
      </label>
    </>
  );
};

export default SelectInput;
