import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordian from ".";

describe("The Accordian", () => {
  it("should render correctly with the right title", async () => {
    const title = "title";
    render(
      <Accordian title={title}>
        <></>
      </Accordian>
    );

    const accordTitle = await screen.findByText(title);

    expect(accordTitle).toBeInTheDocument();
  });
  it("should close on click", async () => {
    const title = "title";
    const childrenText = "children";
    render(
      <Accordian title={title}>
        <p>{childrenText}</p>
      </Accordian>
    );

    const accordTitle = await screen.findByTestId("accordian-header");
    await userEvent.click(accordTitle);
    const accordChildrenText = screen.queryByText(childrenText);

    expect(accordChildrenText).not.toBeInTheDocument();
  });
});
