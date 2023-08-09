import { UseFormReturn, FormProvider } from "react-hook-form";

interface FormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any, any, undefined>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ methods, onSubmit, children }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export default Form;
