import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EditAddress() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const savedAddress = localStorage.getItem(
      "coApplicantAddress"
    );

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    } else {
      setAddress({
        addressLine1: "A123 ABC Name",
        addressLine2: "Area Name",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "coApplicantAddress",
      JSON.stringify(address)
    );

    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="bg-white border-b h-20 flex items-center px-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>

        <h1 className="ml-5 text-[20px] font-semibold">
          Edit Address
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-sm p-6 space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Address Line 1
            </label>

            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Address Line 2
            </label>

            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              City
            </label>

            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              State
            </label>

            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Pincode
            </label>

            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <button
            onClick={handleSave}
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-medium
            "
          >
            Save Address
          </button>

        </div>
      </div>
    </div>
  );
}