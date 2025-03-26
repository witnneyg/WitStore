import { render } from "@testing-library/react";
import { HomePage } from "..";

describe("test", () => {
  it("should render", () => {
    render(<HomePage />);
    expect(2).toBe(2);
  });
});
