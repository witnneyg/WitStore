import { ComponentProps } from "react";

export function SectionTitle({ children, ...props }: ComponentProps<"p">) {
  return (
    <p className="font-bold upparcase pl-5 mb-3 " {...props}>
      {children}
    </p>
  );
}
