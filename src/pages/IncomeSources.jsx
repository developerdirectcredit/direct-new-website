import { ArrowLeft, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function IncomeSources() {
  const navigate = useNavigate();

  const incomeData = {
    monthlyIncome: "₹00,00,000",
    companyName: "Novostack",
    companyType: "Type_of_comp",
    startDate: "DD/MM/YYYY",
    endDate: "DD/MM/YYYY",
    address1: "Input",
    address2: "Input",
    address3: "Input",
    postalCode: "123456",
    state: "Your State",
    city: "Your City",
  };

  const Row = ({ label, value }) => (
    <div className="grid grid-cols-2 py-4 border-b border-gray-100">
      <span className="text-gray-500 text-lg">
        {label}
      </span>

      <span className="font-semibold text-lg text-right">
        {value}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Header */}
      <div className="bg-white border-b px-8 py-5 flex items-center gap-4">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <h1 className="text-3xl font-semibold">
          Income Sources
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="bg-white rounded-3xl border border-[#C8D3FF] shadow-sm">
          
          {/* Title */}
          <div className="flex items-center gap-3 px-8 py-6 border-b">
            <Briefcase size={28} />
            <h2 className="text-2xl font-semibold">
              Income Sources
            </h2>
          </div>

          {/* Details */}
          <div className="p-8">
            <Row
              label="Monthly Income"
              value={incomeData.monthlyIncome}
            />

            <Row
              label="Company Name"
              value={incomeData.companyName}
            />

            <Row
              label="Company Type"
              value={incomeData.companyType}
            />

            <Row
              label="Employment Start Date"
              value={incomeData.startDate}
            />

            <Row
              label="Employment End Date"
              value={incomeData.endDate}
            />

            <Row
              label="Office Address Line 1"
              value={incomeData.address1}
            />

            <Row
              label="Office Address Line 2"
              value={incomeData.address2}
            />

            <Row
              label="Office Address Line 3"
              value={incomeData.address3}
            />

            <Row
              label="Postal Code"
              value={incomeData.postalCode}
            />

            <Row
              label="State"
              value={incomeData.state}
            />

            <div className="grid grid-cols-2 pt-4">
              <span className="text-gray-500 text-lg">
                City
              </span>

              <span className="font-semibold text-lg text-right">
                {incomeData.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}