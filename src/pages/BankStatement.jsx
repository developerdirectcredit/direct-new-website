import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BankStatement() {
  const navigate = useNavigate();

  const statements = [
    "June Statement",
    "July Statement",
    "August Statement",
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="bg-white border-b h-20 flex items-center px-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>

        <h1 className="ml-5 text-[20px] font-semibold">
          Co-Applicant
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center gap-3 mb-10">
          <FileText size={26} />
          <h2 className="text-3xl font-semibold">
            Bank Statement
          </h2>
        </div>

        <h3 className="text-2xl font-semibold mb-6">
          Last 3 Months Statements
        </h3>

        <div className="space-y-6">
          {statements.map((item) => (
            <div
              key={item}
              className="bg-white border border-blue-500 rounded-3xl p-5 flex items-center gap-6"
            >
              <img
                src="https://via.placeholder.com/120x80"
                alt=""
                className="rounded"
              />

              <div>
                <h4 className="text-2xl font-semibold">
                  {item}
                </h4>

                <p className="text-gray-500 text-lg">
                  PDF • 20 MB
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}