import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render user's name", () => {
    const newUser: User = { id: 123, name: "David" };

    render(<UserAccount user={newUser} />);

    const name = screen.getByText(newUser.name);

    expect(name).toBeInTheDocument();
  });

  it("should render Edit button if user is an admin", () => {
    const newUser: User = { id: 123, name: "David", isAdmin: true };

    render(<UserAccount user={newUser} />);

    const editButton = screen.getByRole("button");

    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);
  });

  it("should not render Edit button if user is not an admin", () => {
    const newUser: User = { id: 123, name: "David", isAdmin: false };

    render(<UserAccount user={newUser} />);

    const editButton = screen.queryByRole("button");

    expect(editButton).not.toBeInTheDocument();
  });
});
