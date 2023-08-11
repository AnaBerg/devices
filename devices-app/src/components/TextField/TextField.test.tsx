import { fireEvent, render, screen } from "@testing-library/react-native";

import TextField from ".";
import { handleMacAddressMask } from "../../helpers/handleMacAddressMask";

describe("The TextField", () => {
  const setValue = jest.fn();
  const register = jest.fn();

  const props = (error?: boolean, mask?: (value: string) => string) => ({
    label: "Label",
    name: "name",
    register,
    setValue,
    error,
    mask,
  });

  it("should render correctly", async () => {
    render(<TextField {...props()} />);

    const textField = await screen.findByTestId("name");

    expect(textField).toBeTruthy();
  });

  it("should render correctly if error is true", async () => {
    render(<TextField {...props(true)} />);

    const textField = await screen.findByTestId("name");

    expect(textField).toBeTruthy();
  });

  it("should do the mask correctly", async () => {
    const mask = handleMacAddressMask;
    render(<TextField {...props(false, mask)} />);

    const textField = await screen.findByTestId("name");
    fireEvent.changeText(textField, "7085C2F64926");

    expect(textField.props.value).toMatch("70:85:C2:F6:49:26");
  });

  it("shouldn't change if there is no mask", async () => {
    render(<TextField {...props()} />);

    const textField = await screen.findByTestId("name");
    fireEvent.changeText(textField, "value");

    expect(textField.props.value).toMatch("value");
  });
});
