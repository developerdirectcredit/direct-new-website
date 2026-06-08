import { useState } from "react";

export default function BannerSlider() {

  const banners = [
    "/banner1.jpg",
    "/banner2.jpg"
  ];

  const [current,setCurrent] = useState(0);

  return (
    <div className="mb-8">

      <img
        src={banners[current]}
        className="rounded-3xl w-full"
      />

      <div className="flex justify-center gap-2 mt-3">

        {banners.map((_,i)=>(
          <button
            key={i}
            onClick={()=>setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current===i
              ? "bg-blue-700"
              : "bg-gray-300"
            }`}
          />
        ))}

      </div>

    </div>
  );
}