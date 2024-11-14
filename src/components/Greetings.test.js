import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greetings from "./Greetings";

// Arrange
// Set up the test data, test conditions and test environment

// Act
// Run logic that should be tested (e..g., execute Fn)

// Assert
// Compare execution results with expected result

describe("Greetings Component", () => {
  test("Page title contains Hello World message", () => {
    // 1. Arrange
    render(<Greetings />);

    // 2. Act
    // -

    // 3. Assert
    const hwElement = screen.getByText("Hello World");
    expect(hwElement).toBeInTheDocument();
  });

  test("On init render unchanged text is shown", () => {
    render(<Greetings />);

    const renderedTextWithoutAction = screen.getByText(
      /Testining React Components/i
    );
    expect(renderedTextWithoutAction).toBeInTheDocument();
  });

  test("On btn click changed text is shown", () => {
    render(<Greetings />);

    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const changedTextAfterBtnClick = screen.getByText(/Changed/i);
    expect(changedTextAfterBtnClick).toBeInTheDocument();
  });

  test("On btn click initial text is not available on the page", () => {
    render(<Greetings />);

    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const unchangedTextBeforeBtnClick = screen.queryByText(/Testining React Components/i);
    expect(unchangedTextBeforeBtnClick).toBeNull();
  });
});
