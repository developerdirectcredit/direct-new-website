import { useNavigate } from "react-router-dom";
import {
  User,
  MapPin,
  Briefcase,
  FileText,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

export default function CoApplicants() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Basic Details",
      icon: <User size={22} />,
      route: "/co-applicants/basic-details",
    },
    {
      title: "Address Details",
      icon: <MapPin size={22} />,
      route: "/co-applicants/address-details",
    },
    {
      title: "Income Sources",
      icon: <Briefcase size={22} />,
      route: "/co-applicants/income-sources",
    },
    {
      title: "Documents",
      icon: <FileText size={22} />,
      route: "/co-applicants/documents",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="flex items-center gap-4 p-5 border-b">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <h1 className="text-2xl font-semibold">
          Co-Applicant
        </h1>
      </div>

      <div className="p-4 space-y-5">
        {sections.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            className="
              bg-slate-100
              rounded-3xl
              p-6
              flex
              items-center
              justify-between
              cursor-pointer
            "
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <span className="text-xl font-medium">
                {item.title}
              </span>
            </div>

            <ChevronRight size={28} />
          </div>
        ))}
      </div>
    </div>
  );
}