"use client";
import { useState, ChangeEvent, FocusEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type TextFieldProps = {
  name: string;
  placeholder?: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  type: "email" | "password" | "text" | "tel" | "number";
  error?: string | boolean;
  readOnly?: boolean;
  required?: boolean;
  autoComplete?:
    | "on"
    | "off"
    | "current-password"
    | "new-password"
    | "username"
    | "email"
    | "tel"
    | "organization-title"
    | "cc-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc";
};

export default function TextField({
  name,
  onChange,
  onBlur,
  type,
  label,
  placeholder,
  required,
  error,
  value,
  readOnly,
  autoComplete,
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputType = (type: string) => {
    if (type != "password") return type;

    if (showPassword) return "text";
    if (!showPassword) return "password";
  };

  return (
    <div className="relative flex flex-col justify-between font-inter">
      <label
        htmlFor={name}
        className="font-semi-bold ml-1 text-sm font-semibold capitalize text-primary"
      >
        {label}
      </label>
      <div
        className={`border-darkGrey group relative flex h-[3rem] items-center justify-start gap-2 overflow-hidden rounded-md border
           px-2 pr-2 transition-colors duration-200 focus-within:border-primary ${
             error && "border-red-500 focus-within:border-red-500"
           }`}
      >
        <input
          autoComplete={autoComplete || "off"}
          id={name}
          className="text-dark placeholder:text-gray h-full w-full bg-transparent outline-none"
          placeholder={placeholder}
          type={handleInputType(type)}
          onChange={onChange}
          required={required}
          onBlur={onBlur}
          value={value}
          name={name}
          readOnly={readOnly}
        />
        {type == "password" && (
          <button
            type="button"
            className={`text-[1rem] text-secondary-gray`}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeIcon className="text-gray h-6 w-6" />
            ) : (
              <EyeSlashIcon className="text-gray h-6 w-6" />
            )}
          </button>
        )}
      </div>
      <p
        className={` min-h-4 absolute -bottom-4 font-inter  text-xs text-red-500`}
      >
        {error}
      </p>
    </div>
  );
}
