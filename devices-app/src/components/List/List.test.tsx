import { render, screen } from "@testing-library/react-native";

import List from ".";

describe("The List", () => {
  it("should render correctly", async () => {
    const items = [
      { title: "title", description: "description" },
      { title: "title 1", description: "description 1" },
    ];

    render(<List items={items} />);

    const itemTilte = await screen.findByText(items[0].title);

    expect(itemTilte).toBeTruthy();
  });
  it("should render the empty message if the items is an empty array", async () => {
    render(<List items={[]} />);

    const emptyMessage = await screen.findByText("Não há dispositivos");

    expect(emptyMessage).toBeTruthy();
  });
});
