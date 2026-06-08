import { ArrowLeft, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AadharCard() {
  const navigate = useNavigate();

  // Backend API se ye data aayega
  const aadhaarData = {
    aadhaarNumber: "1234 5678 9012",
    verified: true,

    frontImage:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",

    backImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
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

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[26px]">🪪</span>

          <h2 className="text-[28px] font-semibold">
            Aadhar Card
          </h2>
        </div>

        {/* Aadhaar Number */}
        <div className="mb-3">
          <label className="block text-gray-500 text-lg mb-3">
            Aadhaar Card
          </label>

          <div
            className="
              bg-[#ECECEC]
              rounded-3xl
              px-8
              py-6
              text-[32px]
              font-medium
            "
          >
            {aadhaarData.aadhaarNumber}
          </div>
        </div>

        {/* Verified */}
        {aadhaarData.verified && (
          <div className="flex items-center gap-2 mb-10">
            <BadgeCheck
              size={22}
              className="text-green-500"
            />

            <span className="text-blue-700 text-lg">
              Aadhar Verified
            </span>
          </div>
        )}

        {/* Front View */}
        <h3 className="text-[34px] font-semibold mb-5">
          Front View
        </h3>

        <div
          className="
            border-2
            border-blue-600
            rounded-3xl
            bg-white
            p-8
            mb-10
          "
        >
          <img
            src={aadhaarData.frontImage}
            alt="Aadhar Front"
            className="
              w-full
              max-h-[500px]
              object-contain
              rounded-xl
            "
          />
        </div>

        {/* Back View */}
        <h3 className="text-[34px] font-semibold mb-5">
          Back View
        </h3>

        <div
          className="
            border-2
            border-blue-600
            rounded-3xl
            bg-white
            p-8
          "
        >
          <img
            src={aadhaarData.backImage}
            alt="Aadhar Back"
            className="
              w-full
              max-h-[500px]
              object-contain
              rounded-xl
            "
          />
        </div>

      </div>
    </div>
  );
}