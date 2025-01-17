import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      submitButton: screen.getByRole("button", { name: /submit/i }),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, submitButton } = renderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, submitButton } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(submitButton).toBeEnabled();
  });
});
