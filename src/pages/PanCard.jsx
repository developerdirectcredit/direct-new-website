import { ArrowLeft, BadgeCheck, X, IdCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PanCard() {
  const navigate = useNavigate();

  const panData = {
    panNumber: "DHCAS6519F",
    verified: true,

    panImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/PAN_Card.jpg/800px-PAN_Card.jpg",
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-white border-b h-20 flex items-center px-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>

        <h1 className="ml-5 text-[20px] font-semibold text-[#3D3D3D]">
          Co-Applicant
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-8">

        {/* PAN Heading */}
        <div className="flex items-center gap-3 mb-10">
          <IdCard size={28} />

          <h2 className="text-[28px] font-medium">
            PAN Card
          </h2>
        </div>

        {/* PAN Label */}
        <label className="block text-[#6B7280] text-[18px] mb-3">
          PAN
        </label>

        {/* PAN Number Box */}
        <div
          className="
            bg-[#ECECEC]
            rounded-[24px]
            px-8
            py-6
            text-[28px]
            font-medium
            mb-3
          "
        >
          {panData.panNumber}
        </div>

        {/* Verified */}
        {panData.verified && (
          <div className="flex items-center gap-2 mb-10">
            <BadgeCheck
              size={22}
              className="text-green-500"
            />

            <span className="text-[#0A43C4] text-lg">
              PAN Verified
            </span>
          </div>
        )}

        {/* PAN Image Card */}
        <div
          className="
            relative
            border-2
            border-[#0A43C4]
            rounded-[28px]
            bg-white
            p-8
          "
        >
          <button className="absolute top-5 right-5">
            <X size={28} />
          </button>

          <div className="flex justify-center">
            <img
              src={panData.panImage}
              alt="PAN Card"
              className="
                max-w-full
                h-auto
                rounded-xl
                object-contain
              "
            />
          </div>
        </div>

      </div>
    </div>
  );
}