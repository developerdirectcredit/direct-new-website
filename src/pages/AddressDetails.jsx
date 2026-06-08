import { useState, useEffect } from "react";
import {
  ArrowLeft,
  MapPin,
  ChevronUp,
  MoreVertical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddressDetails() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const [address, setAddress] = useState({
    addressLine1: "A123 ABC Name",
    addressLine2: "Area Name",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
  });

  useEffect(() => {
    const savedAddress = localStorage.getItem(
      "coApplicantAddress"
    );

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

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

      <div className="max-w-[780px] mx-auto px-6 py-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MapPin size={24} />

            <h2 className="text-[22px] font-medium">
              Address Details
            </h2>
          </div>

          <ChevronUp size={28} />
        </div>

        {/* Address Card */}
        <div className="w-[330px] bg-white border border-[#C8D3FF] rounded-[24px] p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <MapPin size={22} />

              <span className="text-[18px] font-medium">
                Rental
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setShowMenu(!showMenu)
                }
                className="p-1"
              >
                <MoreVertical size={22} />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-lg z-50 min-w-[150px]">
                  <button
                    onClick={() =>
                      navigate(
                        "/co-applicants/address-details/edit"
                      )
                    }
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    Edit Address
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-[#6B7280] text-[17px] leading-8">
            {address.addressLine1}
            <br />
            {address.addressLine2}
            <br />
            {address.city}, {address.pincode}
            <br />
            {address.state}
          </p>
        </div>
      </div>
    </div>
  );
}