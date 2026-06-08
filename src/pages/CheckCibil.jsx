// import { ArrowLeft, BadgeCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function CheckCibil() {
// const navigate = useNavigate();

// return ( <div className="min-h-screen bg-gray-50 p-4">


//   {/* Header */}

//   <div className="flex items-center gap-3 mb-6">
//     <button
//       onClick={() => navigate(-1)}
//       className="p-2 bg-white rounded-lg border"
//     >
//       <ArrowLeft size={20} />
//     </button>

//     <h1 className="text-2xl font-bold">
//       Check CIBIL Score
//     </h1>
//   </div>

//   {/* Card */}

//   <div className="bg-white rounded-2xl shadow-sm border p-6">
//     <div className="flex justify-center mb-4">
//       <div className="text-6xl">📊</div>
//     </div>

//     <h2 className="text-xl font-semibold text-center mb-2">
//       Check Your Credit Score
//     </h2>

//     <p className="text-gray-600 text-center mb-6">
//       Enter your details to view your latest CIBIL score and credit report.
//     </p>

//     <form className="space-y-4">
//       <input
//         type="text"
//         placeholder="Full Name"
//         className="w-full border rounded-xl px-4 py-3 outline-none"
//       />

//       <input
//         type="email"
//         placeholder="Email Address"
//         className="w-full border rounded-xl px-4 py-3 outline-none"
//       />

//       <input
//         type="tel"
//         placeholder="Mobile Number"
//         className="w-full border rounded-xl px-4 py-3 outline-none"
//       />

//       <button
//         type="submit"
//         className="
//           w-full
//           bg-blue-600
//           text-white
//           py-3
//           rounded-xl
//           font-semibold
//           hover:bg-blue-700
//         "
//       >
//         Check CIBIL Score
//       </button>
//     </form>
//   </div>

//   {/* Benefits */}

//   <div className="mt-6 bg-white rounded-2xl border p-5">
//     <h3 className="font-bold text-lg mb-4">
//       Benefits
//     </h3>

//     <div className="space-y-3">
//       <div className="flex items-center gap-3">
//         <BadgeCheck size={18} />
//         <span>Instant Credit Score Check</span>
//       </div>

//       <div className="flex items-center gap-3">
//         <BadgeCheck size={18} />
//         <span>100% Secure Process</span>
//       </div>

//       <div className="flex items-center gap-3">
//         <BadgeCheck size={18} />
//         <span>No Impact on Credit Score</span>
//       </div>

//       <div className="flex items-center gap-3">
//         <BadgeCheck size={18} />
//         <span>Free Credit Insights</span>
//       </div>
//     </div>
//   </div>
// </div>


// );
// }




// add new code for testing purpose

import { ArrowLeft, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CheckCibil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 border rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-2xl font-bold">
            Check CIBIL Score
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Content */}
          <div className="flex flex-col justify-center">

            <span className="text-6xl mb-6">
              📊
            </span>

            <h2 className="text-4xl font-bold mb-4">
              Check Your Credit Score Instantly
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Get your latest CIBIL score, detailed credit
              report and personalized loan offers from
              top banks and NBFCs.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" />
                <span>Instant Credit Score Check</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" />
                <span>100% Secure & Encrypted</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" />
                <span>No Impact On Your Credit Score</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" />
                <span>Free Credit Insights & Loan Offers</span>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border">

              <h3 className="text-2xl font-bold mb-6">
                Get Your Free Credit Report
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    bg-blue-600
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-blue-700
                    transition
                  "
                >
                  Check CIBIL Score
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Bottom Benefits Section */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Check Your Credit Score?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">
                Better Loan Approval
              </h3>

              <p className="text-gray-600">
                Higher credit scores improve your chances
                of loan approvals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">
                Lower Interest Rates
              </h3>

              <p className="text-gray-600">
                Good credit history helps secure better
                interest rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">
                Instant Offers
              </h3>

              <p className="text-gray-600">
                Get personalized loan and credit card
                offers instantly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}