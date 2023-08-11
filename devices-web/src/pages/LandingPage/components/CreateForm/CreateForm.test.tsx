import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import CreateForm from ".";

describe("The CreateForm", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };

  it("should render correctly", () => {
    const { container } = render(<CreateForm />);

    expect(container).toBeInTheDocument();
  });

  it("should render the success toast when sending the correct info", async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(device),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    render(<CreateForm />);

    const nameInput = await screen.findByLabelText("Nome");
    fireEvent.change(nameInput, { target: { value: device.name } });

    const serialInput = screen.getByLabelText("Serial");
    fireEvent.change(serialInput, { target: { value: device.serial } });

    const macAddressInput = screen.getByLabelText("MAC Address");
    fireEvent.change(macAddressInput, { target: { value: device.macAddress } });

    const typeInput = screen.getByLabelText("Tipo");
    fireEvent.change(typeInput, { target: { value: device.type } });

    const sendButton = screen.getByText("Enviar");
    fireEvent.click(sendButton);

    const toast = await screen.findByText("Dispositivo criado com sucesso");

    expect(global.fetch).toBeCalled();
    expect(toast).toBeInTheDocument();
  });
  it("should render the error toast when sending the wrong info", async () => {
    global.fetch = jest.fn(
      () => Promise.reject({ message: "Something wrong" })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    try {
      render(<CreateForm />);

      const nameInput = await screen.findByLabelText("Nome");
      fireEvent.change(nameInput, { target: { value: device.name } });

      const serialInput = screen.getByLabelText("Serial");
      fireEvent.change(serialInput, { target: { value: device.serial } });

      const macAddressInput = screen.getByLabelText("MAC Address");
      fireEvent.change(macAddressInput, {
        target: { value: device.macAddress },
      });

      const typeInput = screen.getByLabelText("Tipo");
      fireEvent.change(typeInput, { target: { value: device.type } });

      const sendButton = screen.getByText("Enviar");

      await act(async () => fireEvent.click(sendButton));
    } catch (e) {
      const toast = await screen.findByText(
        "Um erro ocorreu ao criar dispositivo"
      );

      expect(global.fetch).toBeCalled();
      expect(toast).toBeInTheDocument();
    }
  });
});
