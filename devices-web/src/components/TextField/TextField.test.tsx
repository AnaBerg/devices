import { render, screen } from "@testing-library/react";

import { useForm } from "react-hook-form";

import TextField from ".";
import { Form } from "..";

describe("The TextField", () => {
  const onSubmit = jest.fn();

  const Component = ({ error }: { error?: boolean }) => {
    const methods = useForm<{ textField: string }>();
    return (
      <Form methods={methods} onSubmit={onSubmit}>
        <TextField name="textField" label="Text Field" error={error} />
      </Form>
    );
  };

  it("should render correctly", async () => {
    render(<Component />);

    const textField = await screen.findByLabelText("Text Field");

    expect(textField).toBeInTheDocument();
  });
  it("should render the error state correctly", async () => {
    render(<Component error />);

    const textField = await screen.findByLabelText("Text Field");

    expect(textField).toBeInTheDocument();
  });
});
