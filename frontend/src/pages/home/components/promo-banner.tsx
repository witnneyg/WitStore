import { ImgHTMLAttributes } from "react";

export function PromoBanner({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={`h-auto w-full px-5 md:px-0 ${className || ""}`}
      {...props}
    />
  );
}
