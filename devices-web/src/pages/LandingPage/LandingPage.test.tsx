import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import LandingPage from ".";

describe("The LandingPage", () => {
  const device = {
    name: "name",
    type: "SENSOR",
    serial: "123456",
    macAddress: "70:85:C2:F6:49:26",
  };

  it("should render correctly", async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(device),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;

    const { container } = render(<LandingPage />);
    expect(container).toBeInTheDocument();
  });

  it("should render the error toast correctly", async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              message: "Something wrong",
            }),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    try {
      render(<LandingPage />);
      await act(async () => render(<LandingPage />));
    } catch (error) {
      const toast = await screen.findByText(
        "Um erro ocorreu ao listar dispositivos"
      );

      expect(global.fetch).toBeCalled();
      expect(toast).toBeInTheDocument();
    }
  });
});
