import { Controller, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

interface TextFieldProps {
  label: string;
  name: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  mask?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  mask = "",
  required = false,
  error = false,
  disabled = false,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      rules={{ required }}
      control={control}
      render={({ field }) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px 0",
          }}
        >
          <label
            htmlFor={name}
            style={{ fontFamily: "futura-pt, sans-serif", fontWeight: 700 }}
          >
            {label}
          </label>
          <InputMask
            id={name}
            style={{
              fontFamily: "futura-pt, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              padding: "5px",
              borderRadius: "5px",
              border: error ? "1px solid #D32F2F" : "1px solid #B2B2B2",
            }}
            mask={mask}
            disabled={disabled}
            placeholder=" "
            {...field}
          />
        </div>
      )}
    />
  );
};

export default TextField;
