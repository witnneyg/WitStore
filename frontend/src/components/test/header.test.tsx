import { CustomJwtPayload, UserContext } from "@/context/user-context";
import { Header } from "../ui/header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithUser = (user: Partial<CustomJwtPayload | undefined>) => {
  return render(
    <UserContext.Provider
      value={{ user: user as CustomJwtPayload, setUser: vi.fn() }}
    >
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

  it("should show Logout button when user is logged in", () => {
    renderWithUser({ role: "user", name: "test" });

    const logoutButton = screen.queryByText("Logout");

    expect(logoutButton).toBeInTheDocument();
  });

  it("should show Login button when user is not logged in", () => {
    renderWithUser(undefined);

    const loginButton = screen.queryByText("Login");

    expect(loginButton).toBeInTheDocument();
  });

  it("should call handleLogout when clicking on Logout button", () => {
    const mockSetUser = vi.fn();
    render(
      <UserContext.Provider
        value={{
          user: { role: "user", email: "email", _id: "idtest", name: "test" },
          setUser: mockSetUser,
        }}
      >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    );

    const logoutButton = screen.getByText("Logout");

    fireEvent.click(logoutButton);

    expect(mockSetUser).toHaveBeenCalledWith(undefined);
    expect(localStorage.getItem("token")).toBeNull();
  });
});
