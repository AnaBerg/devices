import { render, screen } from "@testing-library/react";

import { useForm } from "react-hook-form";

import Form from ".";

describe("The Form", () => {
  const onSubmit = jest.fn();

  const Component = (override = {}) => {
    const methods = useForm();
    return (
      <Form methods={methods} onSubmit={onSubmit} {...override}>
        <div>children</div>
      </Form>
    );
  };

  it("should render correctly", async () => {
    render(<Component />);

    const children = await screen.findByText("children");

    expect(children).toBeInTheDocument();
  });
});
