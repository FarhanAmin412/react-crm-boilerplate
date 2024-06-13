import { InputHTMLAttributes, forwardRef } from "react";
import ErrorText from "./ErrorText";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <div className="custom-field-style">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          {...inputProps}
          className="mt-1 py-1 w-full px-3 border rounded-lg text-gray-900 focus-within: outline-blue-400"
        />
        <ErrorText>{error}</ErrorText>
      </div>
    );
  }
);

export default TextField;
