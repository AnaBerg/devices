import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import MacAddress from ".";

describe("The AddressForm", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };

  it("should render correctly", () => {
    const { container } = render(<MacAddress />);

    expect(container).toBeInTheDocument();
  });
  it("should call the query function correctly", async () => {
    const query = jest.fn();
    render(<MacAddress query={query} />);

    const macAddressInput = screen.getByLabelText("MAC Address");
    fireEvent.change(macAddressInput, { target: { value: device.macAddress } });

    const sendButton = screen.getByText("Enviar");
    await act(async () => fireEvent.click(sendButton));

    expect(query).toBeCalled();
  });
  it("should call the mutate function correctly", async () => {
    const mutate = jest.fn();
    render(<MacAddress mutate={mutate} />);

    const macAddressInput = screen.getByLabelText("MAC Address");
    fireEvent.change(macAddressInput, { target: { value: device.macAddress } });

    const sendButton = screen.getByText("Enviar");
    await act(async () => fireEvent.click(sendButton));

    expect(mutate).toBeCalled();
  });
});
