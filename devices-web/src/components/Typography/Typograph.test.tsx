import { render, screen } from "@testing-library/react";

import Typography from ".";

describe("The Typograph", () => {
  it("should render correctly", async () => {
    const text = "text";
    render(<Typography>{text}</Typography>);

    const typograph = await screen.findByText(text);

    expect(typograph).toBeInTheDocument();
  });
  it("should render with the variant caption correctly", async () => {
    const text = "text";
    render(<Typography variant="caption">{text}</Typography>);

    const typograph = await screen.findByText(text);

    expect(typograph).toBeInTheDocument();
  });
  it("should render with the variant title correctly", async () => {
    const text = "text";
    render(<Typography variant="title">{text}</Typography>);

    const typograph = await screen.findByText(text);

    expect(typograph).toBeInTheDocument();
  });
  it("should render with the variant srbtitle correctly", async () => {
    const text = "text";
    render(<Typography variant="subtitle">{text}</Typography>);

    const typograph = await screen.findByText(text);

    expect(typograph).toBeInTheDocument();
  });
});
