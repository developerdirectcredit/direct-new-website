import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  FileText,
  ChevronRight,
} from "lucide-react";

export default function CoApplicantDocuments() {
  const navigate = useNavigate();

  const documents = [
    {
      title: "Aadhar Card",
      icon: <CreditCard size={24} />,
      route: "/co-applicants/documents/aadhar",
    },
    {
      title: "PAN Card",
      icon: <CreditCard size={24} />,
      route: "/co-applicants/documents/pan",
    },
    {
      title: "Pay Slips",
      icon: <FileText size={24} />,
      route: "/co-applicants/documents/payslips",
    },
    {
      title: "Bank Statement",
      icon: <FileText size={24} />,
      route: "/co-applicants/documents/bank-statement",
    },
  ];

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
      <div className="max-w-[900px] mx-auto py-8 px-6 space-y-8">
        {documents.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            className="
              bg-[#EEF1FB]
              rounded-[24px]
              px-8
              py-8
              flex
              items-center
              justify-between
              cursor-pointer
              hover:bg-[#E8ECFA]
              transition
            "
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <span className="text-[30px] font-medium">
                {item.title}
              </span>
            </div>

            <ChevronRight size={34} />
          </div>
        ))}
      </div>
    </div>
  );
}