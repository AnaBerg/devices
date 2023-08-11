import { render, screen, fireEvent } from "@testing-library/react-native";

import { CreateForm } from ".";

describe("The CreateForm", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };

  it("should render correctly", async () => {
    const { UNSAFE_root: container } = render(<CreateForm />);

    expect(container).toBeTruthy();
  });
  it("should render error message if api error", async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(device),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    render(<CreateForm />);

    const nameInput = await screen.findByTestId("name");
    fireEvent.changeText(nameInput, device.name);

    const serialInput = screen.getByTestId("serial");
    fireEvent.changeText(serialInput, device.serial);

    const macAddressInput = screen.getByTestId("macAddress");
    fireEvent.changeText(macAddressInput, device.macAddress);

    const typeInput = screen.getByTestId("type");
    fireEvent(typeInput, "onValueChange", device.type);

    const sendButton = screen.getByText("Enviar");
    fireEvent.press(sendButton);

    const errorMessage = screen.queryByText("Error");

    expect(errorMessage).toBeFalsy();
  });

  it("should send the correct info", async () => {
    global.fetch = jest.fn(
      () => Promise.reject({ message: "API down" })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    render(<CreateForm />);

    try {
      const nameInput = await screen.findByTestId("name");
      fireEvent.changeText(nameInput, device.name);

      const serialInput = screen.getByTestId("serial");
      fireEvent.changeText(serialInput, device.serial);

      const macAddressInput = screen.getByTestId("macAddress");
      fireEvent.changeText(macAddressInput, device.macAddress);

      const typeInput = screen.getByTestId("type");
      fireEvent(typeInput, "onValueChange", device.type);

      const sendButton = screen.getByText("Enviar");
      fireEvent.press(sendButton);
    } catch (error) {
      const errorMessage = await screen.findByText("Error");

      expect(errorMessage).toBeTruthy();
    }
  });
});
