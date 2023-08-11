import { render, screen } from "@testing-library/react";

import Toast from ".";

describe("The Toast", () => {
  const onClose = jest.fn();
  it("should render correctly", async () => {
    const message = "message";
    render(<Toast type="success" message={message} onClose={onClose} open />);

    const toast = await screen.findByText(message);

    expect(toast).toBeInTheDocument();
  });
  it("should not render with open is false", async () => {
    const message = "message";
    render(<Toast type="success" message={message} onClose={onClose} />);

    const toast = screen.queryByText(message);

    expect(toast).not.toBeInTheDocument();
  });
});
