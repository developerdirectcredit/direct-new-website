// export default function Profile() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">
//         Profile Page
//       </h1>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import ProfileMenuItem from "../components/ProfileMenuItem";
import {
  User,
  FileText,
  Settings,
  Star,
  LogOut
} from "lucide-react";

export default function Profile() {

  const navigate = useNavigate();

  const shareApp = () => {

    if (navigator.share) {
      navigator.share({
        title: "Direct Credit",
        text: "Download Direct Credit App",
        url: window.location.origin
      });
    }
  };

  return (
    <div className="p-5 pb-24">

      {/* Profile Card */}

      <div
        className="
        bg-gray-100
        rounded-3xl
        p-5
        flex
        items-center
        justify-between
        mb-8
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
            w-20
            h-20
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
            "
          >
            <User size={40}/>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              +91 - 9876543298
            </h2>

            <p className="text-green-600 font-semibold">
              Your profile is 25% Completed
            </p>
          </div>
        </div>

        <span className="text-4xl">
          ›
        </span>
      </div>

      {/* Menu Section */}

      <div
        className="
        border
        rounded-3xl
        overflow-hidden
        mb-8
        "
      >
        <ProfileMenuItem
          icon="📋"
          title="My Applications"
          onClick={() =>
            navigate("/my-applications")
          }
        />

        <ProfileMenuItem
          icon="👥"
          title="Co-Applicants"
          onClick={() =>
            navigate("/co-applicants")
          }
        />

        <ProfileMenuItem
          icon="👤"
          title="References"
          onClick={() =>
            navigate("/references")
          }
        />

        <ProfileMenuItem
          icon="📄"
          title="My Documents"
          onClick={() =>
            navigate("/documents")
          }
        />

        <ProfileMenuItem
          icon="🎧"
          title="Help Center"
          onClick={() =>
            navigate("/help-center")
          }
        />

        <ProfileMenuItem
          icon="📤"
          title="Share App"
          onClick={shareApp}
        />

        <ProfileMenuItem
          icon="📜"
          title="Loan Terms"
          onClick={() =>
            navigate("/loan-terms")
          }
        />

        <ProfileMenuItem
          icon={<Settings size={24}/>}
          title="Settings"
          onClick={() =>
            navigate("/settings")
          }
        />

        <ProfileMenuItem
          icon={<Star size={24}/>}
          title="Rate Us"
          onClick={() =>
            navigate("/rate-us")
          }
        />
      </div>

      {/* Logout */}

      <div
        onClick={() => alert("Logout")}
        className="
        border
        rounded-3xl
        p-5
        flex
        items-center
        justify-between
        cursor-pointer
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14
            rounded-xl
            bg-blue-50
            flex
            items-center
            justify-center
            "
          >
            <LogOut />
          </div>

          <h2 className="text-2xl">
            Logout
          </h2>
        </div>

        <span className="text-3xl">
          ›
        </span>
      </div>

      <p
        className="
        text-center
        mt-10
        text-gray-500
        "
      >
        App Version 1.0
      </p>

    </div>
  );
}