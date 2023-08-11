import { render } from "@testing-library/react";

import App from ".";

describe("The App", () => {
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

    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
