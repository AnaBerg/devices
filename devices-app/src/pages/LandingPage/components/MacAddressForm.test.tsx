import { render, screen, fireEvent } from "@testing-library/react-native";

import { MacAddressForm } from ".";

describe("The MacAddressForm", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };
  const query = jest.fn();
  const mutate = jest.fn();

  it("should render correctly", async () => {
    const { UNSAFE_root: container } = render(<MacAddressForm />);

    expect(container).toBeTruthy();
  });
  it("should call query correctly", async () => {
    render(<MacAddressForm query={query} />);

    const macAddressInput = await screen.findByTestId("macAddress");
    fireEvent.changeText(macAddressInput, device.macAddress);

    const sendButton = screen.getByText("Enviar");
    fireEvent.press(sendButton);

    expect(query).not.toBeCalled();
  });
  it("should call mutate correctly", async () => {
    render(<MacAddressForm mutate={mutate} />);

    const macAddressInput = await screen.findByTestId("macAddress");
    fireEvent.changeText(macAddressInput, device.macAddress);

    const sendButton = screen.getByText("Enviar");
    fireEvent.press(sendButton);

    expect(mutate).not.toBeCalled();
  });

  it("should render the error message with error is true", async () => {
    render(<MacAddressForm error />);

    const errorMessage = await screen.findByText("Error");

    expect(errorMessage).toBeTruthy();
  });
});
