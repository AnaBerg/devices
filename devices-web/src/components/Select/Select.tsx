import { Controller, useFormContext } from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  items: Array<{
    value: string;
    label: string;
  }>;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  items,
  label,
  name,
  disabled = false,
  error = false,
  required = false,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px 0",
          }}
        >
          <label
            style={{ fontFamily: "futura-pt, sans-serif", fontWeight: 700 }}
          >
            {label}
          </label>
          <select
            {...field}
            disabled={disabled}
            style={{
              fontFamily: "futura-pt, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              padding: "5px",
              borderRadius: "5px",
              border: error ? "1px solid #D32F2F" : "1px solid #B2B2B2",
            }}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {items.map(({ label, value }, i) => (
              <option key={i} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
};

export default Select;
