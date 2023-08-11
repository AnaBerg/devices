import { render, screen } from "@testing-library/react-native";

import Button from ".";

describe("The Button", () => {
  it("should render correctly", async () => {
    render(<Button onPress={jest.fn()}>button</Button>);

    const button = await screen.findByText("button");

    expect(button).toBeTruthy();
  });
  it("should render if the correctly if variant is outlined", async () => {
    render(
      <Button onPress={jest.fn()} variant="outline">
        button
      </Button>
    );

    const button = await screen.findByText("button");

    expect(button).toBeTruthy();
  });

  it("should render if the correctly if variant is text", async () => {
    render(
      <Button onPress={jest.fn()} variant="text">
        button
      </Button>
    );

    const button = await screen.findByText("button");

    expect(button).toBeTruthy();
  });
});
