import { useState } from "react";
import { Info } from "lucide-react";

export default function TooltipInfo({
  text,
}) {
  const [show, setShow] =
    useState(false);

  return (
    <div className="relative inline-block">

      <Info
        size={16}
        className="cursor-pointer text-blue-600"
        onMouseEnter={() =>
          setShow(true)
        }
        onMouseLeave={() =>
          setShow(false)
        }
      />

      {show && (
        <div className="absolute z-50 w-72 p-3 bg-black text-white text-sm rounded-lg top-6 left-0">
          {text}
        </div>
      )}

    </div>
  );
}