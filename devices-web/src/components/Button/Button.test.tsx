import { render, screen } from "@testing-library/react";

import Button from ".";

describe("The Button", () => {
  it("should render correctly", async () => {
    render(<Button>button</Button>);

    const button = await screen.findByText("button");

    expect(button).toBeInTheDocument();
  });
  it("should render the loading spinner with the loading is true", async () => {
    render(<Button loading>button</Button>);

    const spinner = await screen.findByTestId("loading-spinner");

    expect(spinner).toBeInTheDocument();
  });
  it("should render if the correctly if variant is outlined", async () => {
    render(<Button variant="outline">button</Button>);

    const button = await screen.findByText("button");

    expect(button).toBeInTheDocument();
  });

  it("should render if the correctly if variant is text", async () => {
    render(<Button variant="text">button</Button>);

    const button = await screen.findByText("button");

    expect(button).toBeInTheDocument();
  });
});
