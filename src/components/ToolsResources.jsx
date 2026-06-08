// import { useNavigate } from "react-router-dom";

// export default function ToolsResources() {
//     const navigate = useNavigate();

//     return (
//         <>
//             {/* Tools & Resources */}

//             <div className="mt-8">
//                 <h2 className="text-2xl font-bold mb-4">
//                     Tools and Resources
//                 </h2>

//                 <div className="flex gap-4">

//                     {/* EMI Calculator */}

//                     <div
//                         onClick={() => navigate("/emi-calculator")}
//                         className="
//             bg-white
//             rounded-2xl
//             border
//             w-32
//             h-32
//             cursor-pointer
//             flex
//             flex-col
//             justify-center
//             items-center
//             hover:shadow-lg
//             "
//                     >
//                         <div
//                             onClick={() => navigate("/check-cibil")}
//                             className="
//                              bg-white
//                               rounded-2xl
//   border
//   w-32
//   h-32
//   cursor-pointer
//   flex
//   flex-col
//   justify-center
//   items-center
//   hover:shadow-lg
//   "
//                         >
//                             <h3 className="text-center font-medium">
//                                 CIBIL Check
//                             </h3>

//                             <div className="text-4xl mt-2">
//                                 📊
//                             </div>
//                         </div>
//                     </div>




//                     {/* Help Center */}

//                     <div
//                         onClick={() => navigate("/help-center")}
//                         className="
//             bg-white
//             rounded-2xl
//             border
//             w-32
//             h-32
//             cursor-pointer
//             flex
//             flex-col
//             justify-center
//             items-center
//             hover:shadow-lg
//             "
//                     >
//                         <h3 className="text-center font-medium">
//                             Help Center
//                         </h3>

//                         <div className="text-4xl mt-2">
//                             🎧
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Disclaimer */}

//             <div className="mt-8 bg-red-50 p-5 rounded-xl relative">
//                 <button className="absolute right-4 top-4">
//                     ✕
//                 </button>

//                 <p className="text-sm text-blue-900">
//                     <span className="font-bold text-red-600">
//                         Disclaimer:
//                     </span>{" "}
//                     Do not make any payment, if applicable,
//                     to third parties, representatives,
//                     or employees of Direct Credit.
//                     Payments, if required, must be made
//                     only into Direct Credit's official
//                     bank account or directly to the
//                     lending Bank/NBFC.
//                     Direct Credit will not be liable
//                     for any loss arising from payments
//                     made otherwise.
//                 </p>
//             </div>
//         </>
//     );
// }






import { useNavigate } from "react-router-dom";

export default function ToolsResources() {
const navigate = useNavigate();

return (
<>
{/* Tools & Resources */}

```
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">
      Tools & Resources
    </h2>

    <div className="flex gap-4 flex-wrap">

      {/* EMI Calculator */}

      <div
        onClick={() => navigate("/emi-calculator")}
        className="
          bg-white
          rounded-2xl
          border
          w-32
          h-32
          cursor-pointer
          flex
          flex-col
          justify-center
          items-center
          hover:shadow-lg
          transition
        "
      >
        <h3 className="text-center font-medium">
          EMI Calculator
        </h3>

        <div className="text-4xl mt-2">
          🧮
        </div>
      </div>

      {/* CIBIL Check */}

      <div
        onClick={() => navigate("/check-cibil")}
        className="
          bg-white
          rounded-2xl
          border
          w-32
          h-32
          cursor-pointer
          flex
          flex-col
          justify-center
          items-center
          hover:shadow-lg
          transition
        "
      >
        <h3 className="text-center font-medium">
          CIBIL Check
        </h3>

        <div className="text-4xl mt-2">
          📊
        </div>
      </div>

      {/* Help Center */}

      <div
        onClick={() => navigate("/help-center")}
        className="
          bg-white
          rounded-2xl
          border
          w-32
          h-32
          cursor-pointer
          flex
          flex-col
          justify-center
          items-center
          hover:shadow-lg
          transition
        "
      >
        <h3 className="text-center font-medium">
          Help Center
        </h3>

        <div className="text-4xl mt-2">
          🎧
        </div>
      </div>

    </div>
  </div>

  {/* Disclaimer */}

  <div className="mt-8 bg-red-50 p-5 rounded-xl relative">
    <button className="absolute right-4 top-4">
      ✕
    </button>

    <p className="text-sm text-blue-900">
      <span className="font-bold text-red-600">
        Disclaimer:
      </span>{" "}
      Do not make any payment, if applicable, to third parties,
      representatives, or employees of Direct Credit. Payments,
      if required, must be made only into Direct Credit's official
      bank account or directly to the lending Bank/NBFC.
      Direct Credit will not be liable for any loss arising from
      payments made otherwise.
    </p>
  </div>
</>


);
}
