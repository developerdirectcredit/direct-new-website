


// === old version code  add new  version code

// chat gpt code for website version

// import { useState } from "react";
// import { Calculator } from "lucide-react";

// export default function EmiCalculator() {
//   const [loan, setLoan] = useState("");
//   const [rate, setRate] = useState("");
//   const [years, setYears] = useState("");

//   const p = Number(loan);
//   const r = Number(rate) / 12 / 100;
//   const n = Number(years) * 12;

//   const emi =
//     p && r && n
//       ? (
//           (p * r * Math.pow(1 + r, n)) /
//           (Math.pow(1 + r, n) - 1)
//         ).toFixed(0)
//       : 0;

//   const totalAmount = emi * n;
//   const totalInterest = totalAmount - p;

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Hero Section */}

//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="flex items-center gap-4">
//             <Calculator size={40} />
//             <div>
//               <h1 className="text-4xl font-bold">
//                 EMI Calculator
//               </h1>

//               <p className="text-blue-100 mt-2">
//                 Calculate your monthly EMI instantly
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}

//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <div className="grid lg:grid-cols-2 gap-10">

//           {/* Left Side Form */}

//           <div className="bg-white rounded-3xl shadow-lg p-8">
//             <h2 className="text-2xl font-bold mb-6">
//               Loan Details
//             </h2>

//             <div className="space-y-5">

//               <div>
//                 <label className="block mb-2 font-medium">
//                   Loan Amount (₹)
//                 </label>

//                 <input
//                   type="number"
//                   value={loan}
//                   onChange={(e) => setLoan(e.target.value)}
//                   placeholder="Enter Loan Amount"
//                   className="w-full border rounded-xl p-4"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium">
//                   Interest Rate (%)
//                 </label>

//                 <input
//                   type="number"
//                   value={rate}
//                   onChange={(e) => setRate(e.target.value)}
//                   placeholder="Enter Interest Rate"
//                   className="w-full border rounded-xl p-4"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium">
//                   Loan Tenure (Years)
//                 </label>

//                 <input
//                   type="number"
//                   value={years}
//                   onChange={(e) => setYears(e.target.value)}
//                   placeholder="Enter Loan Tenure"
//                   className="w-full border rounded-xl p-4"
//                 />
//               </div>

//             </div>
//           </div>

//           {/* Right Side Results */}

//           <div className="space-y-6">

//             <div className="bg-white rounded-3xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold mb-4">
//                 EMI Summary
//               </h2>

//               <div className="text-center py-5">
//                 <p className="text-gray-500">
//                   Monthly EMI
//                 </p>

//                 <h1 className="text-5xl font-bold text-blue-600 mt-3">
//                   ₹ {Number(emi).toLocaleString()}
//                 </h1>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-5">

//               <div className="bg-white p-6 rounded-2xl shadow">
//                 <p className="text-gray-500">
//                   Loan Amount
//                 </p>

//                 <h3 className="text-2xl font-bold mt-2">
//                   ₹ {p.toLocaleString()}
//                 </h3>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow">
//                 <p className="text-gray-500">
//                   Total Interest
//                 </p>

//                 <h3 className="text-2xl font-bold mt-2">
//                   ₹ {Number(totalInterest).toLocaleString()}
//                 </h3>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow">
//                 <p className="text-gray-500">
//                   Total Payment
//                 </p>

//                 <h3 className="text-2xl font-bold mt-2">
//                   ₹ {Number(totalAmount).toLocaleString()}
//                 </h3>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow">
//                 <p className="text-gray-500">
//                   Tenure
//                 </p>

//                 <h3 className="text-2xl font-bold mt-2">
//                   {years || 0} Years
//                 </h3>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Bottom Info Section */}

//         <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
//           <h2 className="text-2xl font-bold mb-4">
//             What is EMI?
//           </h2>

//           <p className="text-gray-600 leading-8">
//             EMI (Equated Monthly Installment) is the fixed
//             amount paid every month towards repayment of
//             a loan. It consists of both principal and
//             interest components. Use this EMI calculator
//             to estimate your monthly repayments before
//             applying for a loan.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




/// === insert a google gemni code for website version


import { useState } from "react";
import { Calculator, ArrowLeftRight , ArrowLeft } from "lucide-react";

export default function EmiCalculator() {
  // Mode configuration: 'standard' or 'reverse'
  const [mode, setMode] = useState("standard");

  // Inputs
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [targetEmi, setTargetEmi] = useState(""); // For Reverse Calculation

  // Common variables
  const r = Number(rate) / 12 / 100;
  const n = Number(years) * 12;

  let emi = 0;
  let p = Number(loan);
  let totalAmount = 0;
  let totalInterest = 0;

  if (mode === "standard") {
    // 1. Standard Mode: Calculate EMI from Loan Amount
    p = Number(loan);
    emi = p && r && n
        ? ((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
        : 0;
    
    totalAmount = emi ? emi * n : 0;
    totalInterest = totalAmount && p ? totalAmount - p : 0;
  } else {
    // 2. Reverse Mode: Calculate Loan Amount from Target EMI
    emi = Number(targetEmi);
    p = emi && r && n
        ? (emi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
        : 0;

    totalAmount = emi ? emi * n : 0;
    totalInterest = totalAmount && p ? totalAmount - p : 0;
  }

  // Helper to safely clear inputs when switching modes
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setLoan("");
    setTargetEmi("");
  };

  return (

    

    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Calculator size={40} />
              <div>
                <h1 className="text-4xl font-bold">EMI Tool Suite</h1>
                <p className="text-blue-100 mt-2">
                  {mode === "standard" 
                    ? "Calculate your monthly EMI instantly" 
                    : "Determine your maximum affordable loan amount"}
                </p>
              </div>
            </div>

            {/* Mode Switcher Button */}
            <button
              onClick={() => handleModeChange(mode === "standard" ? "reverse" : "standard")}
              className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-blue-50 transition-all text-sm self-start md:self-auto"
            >
              <ArrowLeftRight size={18} />
              Switch to {mode === "standard" ? "Reverse Calculator" : "Standard Calculator"}
            </button>
          </div>
        </div>
      </div>
    



      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left Side Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {mode === "standard" ? "Loan Details" : "Budget Details"}
              </h2>
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {mode === "standard" ? "Standard Mode" : "Reverse Mode"}
              </span>
            </div>

            <div className="space-y-5">
              {mode === "standard" ? (
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loan}
                    onChange={(e) => setLoan(e.target.value)}
                    placeholder="Enter Loan Amount"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Target Monthly EMI (₹)
                  </label>
                  <input
                    type="number"
                    value={targetEmi}
                    onChange={(e) => setTargetEmi(e.target.value)}
                    placeholder="Enter budget you can pay monthly"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Enter Interest Rate"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="Enter Loan Tenure"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Results */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Summary Breakdown</h2>

              <div className="text-center py-5">
                <p className="text-gray-500 font-medium">
                  {mode === "standard" ? "Calculated Monthly EMI" : "Target Monthly EMI Input"}
                </p>
                <h1 className="text-5xl font-bold text-blue-600 mt-3">
                  ₹ {Math.round(emi).toLocaleString("en-IN")}
                </h1>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50">
                <p className="text-gray-500 font-medium">
                  {mode === "standard" ? "Loan Amount" : "Eligible Loan Amount"}
                </p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  ₹ {Math.round(p).toLocaleString("en-IN")}
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50">
                <p className="text-gray-500 font-medium">Total Interest</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  ₹ {Math.round(totalInterest).toLocaleString("en-IN")}
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50">
                <p className="text-gray-500 font-medium">Total Payment</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  ₹ {Math.round(totalAmount).toLocaleString("en-IN")}
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-50">
                <p className="text-gray-500 font-medium">Tenure</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">
                  {years || 0} Years
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Info Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {mode === "standard" ? "What is EMI?" : "What is Reverse EMI Calculation?"}
          </h2>
          <p className="text-gray-600 leading-8">
            {mode === "standard" ? (
              "EMI (Equated Monthly Installment) is the fixed amount paid every month towards repayment of an active loan. It dynamically balances components of both your primary principal balance and accrued interest."
            ) : (
              "Reverse EMI calculation turns the standard structure upside down. Instead of asking 'What will my monthly payment be for this loan amount?', it answers 'What total loan size can I afford based on the specific monthly budget payment I can spare?'"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}