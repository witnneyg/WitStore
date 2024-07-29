import { ImgHTMLAttributes } from "react";

export function PromoBanner({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="h-auto w-full px-5" {...props} />;
}
