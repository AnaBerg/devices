import { render, screen } from "@testing-library/react-native";

import Select from ".";

describe("The Select", () => {
  const setValue = jest.fn();
  const register = jest.fn();

  const props = (
    items: Array<{
      label: string;
      value: string;
    }>,
    error = false
  ) => ({
    items,
    label: "Label",
    name: "name",
    register,
    setValue,
    error,
    required: false,
  });

  it("should render correctly", async () => {
    render(<Select {...props([{ label: "item 1", value: "ITEM_1" }])} />);

    const select = await screen.findByTestId("name");

    expect(select).toBeTruthy();
  });

  it("should render correctly if error is true", async () => {
    render(<Select {...props([{ label: "item 1", value: "ITEM_1" }], true)} />);

    const select = await screen.findByTestId("name");

    expect(select).toBeTruthy();
  });
});
