import { UserContext } from "@/context/user-context";
import { Header } from "../ui/header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithUser = (user: any) => {
  return render(
    <UserContext.Provider value={{ user, setUser: vi.fn() }}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

describe("Header", () => {
  it("should show the Admin button when the user is an admin", () => {
    renderWithUser({ role: "admin" });

    const adminButton = screen.getByText("Admin");

    expect(adminButton).toBeInTheDocument();
  });

  it("should not show the Admin button when the user is not an admin", () => {
    renderWithUser({ role: "user" });

    const adminButton = screen.queryByText("Admin");

    expect(adminButton).not.toBeInTheDocument();
  });

  it("should not show the Admin button when there is no user", () => {
    renderWithUser(undefined);

    const adminButton = screen.queryByText("Admin");

    expect(adminButton).not.toBeInTheDocument();
  });
});
