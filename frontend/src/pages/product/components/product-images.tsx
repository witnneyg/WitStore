import { useEffect, useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

export function ProductImages({ imageUrls, name }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  useEffect(() => {
    setCurrentImage(imageUrls[0]);
  }, [imageUrls]);

  function handleImageClick(imageUrl: string) {
    setCurrentImage(imageUrl);
  }

  return (
    <div className="flex flex-col lg:relative lg:flex-grow lg:basis-[10%] ">
      <div className="bg-accent h-[380px] w-full flex justify-center items-center lg:h-full  rounded-lg">
        <img
          src={currentImage}
          alt={name}
          className="h-auto w-auto max-h-[70%] max-w-[80%] lg:max-h-[50%] lg:max-w-[70%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 px-5 lg:flex lg:flex-col lg:absolute lg:top-0	lg:left-0 lg:w-[110px]">
        {imageUrls.map((imageUrl) => (
          <button
            className={`bg-accent rounded-lg flex justify-center items-center border-2  ${imageUrl == currentImage && "border-2 border-primary border-solid"}`}
            key={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
          >
            <img
              src={imageUrl}
              alt={name}
              className="h-auto w-auto max-h-[70%] max-w-[80%]  lg:bg-neutral-950 lg:rounded-lg lg:p-2 lg:max-w-[95%] lg:max-h-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
