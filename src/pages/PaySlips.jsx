import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaySlips() {
  const navigate = useNavigate();

  const slips = [
    "June Payslip",
    "July Payslip",
    "August Payslip",
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="bg-white border-b px-8 py-5 flex items-center gap-4">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <h1 className="text-3xl font-semibold">
          Pay Slips
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold mb-8">
            Last 3 Months Payslips
          </h2>

          <div className="space-y-5">
            {slips.map((item) => (
              <div
                key={item}
                className="
                  border
                  rounded-2xl
                  p-5
                  flex
                  items-center
                  gap-6
                "
              >
                <img
                  src="https://via.placeholder.com/120x80"
                  alt=""
                  className="rounded"
                />

                <div>
                  <div className="text-xl font-semibold">
                    {item}
                  </div>

                  <div className="text-gray-500">
                    PDF • 20 MB
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}