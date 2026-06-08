import { ArrowLeft, User, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const details = [
  ["Name", "Saumya Verma"],
  ["Phone Number", "9876***298"],
  ["Gender", "Female"],
  ["Employment Type", "Salaried"],
  ["Birth Date", "12/08/1998"],
  ["Father's Name", "Amit Verma"],
  ["Mother's Name", "Prachi Verma"],
  ["Marital Status", "Unmarried"],
  ["Education Qualification", "MBA Finance"],
  ["Occupation", "Product Manager"],
];

export default function BasicDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Header */}
      <div className="h-20 bg-white border-b flex items-center px-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>

        <h1 className="ml-5 text-[20px] font-semibold text-[#3D3D3D]">
          Co-Applicant
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-[780px] mx-auto px-6 py-8">
        <div className="bg-white border border-[#C8D3FF] rounded-[28px] p-8">
          {/* Title */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <User size={24} />
              <h2 className="text-[22px] font-medium">
                Basic Details
              </h2>
            </div>

            <ChevronUp size={30} />
          </div>

          {/* Rows */}
          <div className="space-y-7">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-start"
              >
                <span className="text-[#6B7280] text-[18px]">
                  {label}
                </span>

                <span className="text-[18px] font-medium text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}