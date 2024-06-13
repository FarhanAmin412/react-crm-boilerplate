import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { SELECT_FIELD_TYPE } from "../../common/interfaces";

import Select from "react-select";
import ErrorText from "./ErrorText";

const SelectField = <T extends FieldValues>({
  options,
  label,
  error,
  ...controllerProps
}: UseControllerProps<T> & {
  options: SELECT_FIELD_TYPE;
  label: string;
  error?: string;
}) => {
  const {
    field: { onChange },
  } = useController(controllerProps);
  return (
    <div className="custom-field-style">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Select
        options={options}
        onChange={(newValue) => onChange(newValue?.value)}
        className="pt-1"
      />
      <ErrorText>{error}</ErrorText>
    </div>
  );
};

export default SelectField;
