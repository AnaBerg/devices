import { render, screen } from "@testing-library/react";

import List from ".";

describe("The List", () => {
  it("should render correctly", async () => {
    const items = [
      { title: "title", description: "description" },
      { title: "title 1", description: "description 1" },
    ];

    render(<List items={items} />);

    const itemTilte = await screen.findByText(items[0].title);

    expect(itemTilte).toBeInTheDocument();
  });
  it("should render the empty message if the items is an empty array", async () => {
    render(<List items={[]} />);

    const emptyMessage = await screen.findByText("Não há dispositivos");

    expect(emptyMessage).toBeInTheDocument();
  });
  it("should render the loading spinner if loading is true", async () => {
    render(<List items={[]} loading />);

    const spinner = await screen.findByTestId("loading-spinner");

    expect(spinner).toBeInTheDocument();
  });
});
