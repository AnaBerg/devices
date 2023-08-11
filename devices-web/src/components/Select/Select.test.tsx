import { render, screen } from "@testing-library/react";

import { useForm } from "react-hook-form";

import Select from ".";
import { Form } from "..";

describe("The Select", () => {
  const onSubmit = jest.fn();

  const Component = ({ error }: { error?: boolean }) => {
    const methods = useForm<{ select: string }>();
    return (
      <Form methods={methods} onSubmit={onSubmit}>
        <Select
          name="select"
          label="Select"
          items={[{ label: "item", value: "ITEM" }]}
          error={error}
        />
      </Form>
    );
  };

  it("should render correctly", async () => {
    render(<Component />);

    const select = await screen.findByLabelText("Select");

    expect(select).toBeInTheDocument();
  });
  it("should render the error state correctly", async () => {
    render(<Component error />);

    const select = await screen.findByLabelText("Select");

    expect(select).toBeInTheDocument();
  });
});
