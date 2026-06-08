// import { ChevronRight } from "lucide-react";

// export default function ProfileMenuItem({
//   icon,
//   title,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className="
//       flex
//       items-center
//       justify-between
//       px-5
//       py-6
//       border-b
//       cursor-pointer
//       hover:bg-gray-50
//       "
//     >
//       <div className="flex items-center gap-4">
//         <div
//           className="
//           w-14
//           h-14
//           rounded-xl
//           bg-blue-50
//           flex
//           items-center
//           justify-center
//           text-2xl
//           "
//         >
//           {icon}
//         </div>

//         <span className="text-2xl font-medium">
//           {title}
//         </span>
//       </div>

//       <ChevronRight size={30} />
//     </div>
//   );
// }


//  === website version code


// import { ChevronRight } from "lucide-react";

// export default function ProfileMenuItem({
//   icon,
//   title,
//   description,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className="
//         bg-white
//         rounded-2xl
//         border
//         p-5
//         flex
//         items-center
//         justify-between
//         cursor-pointer
//         transition-all
//         duration-300
//         hover:shadow-lg
//         hover:border-blue-300
//         hover:-translate-y-1
//       "
//     >
//       {/* Left Section */}
//       <div className="flex items-center gap-4">

//         <div
//           className="
//             w-14
//             h-14
//             rounded-xl
//             bg-blue-100
//             flex
//             items-center
//             justify-center
//             text-blue-600
//           "
//         >
//           {icon}
//         </div>

//         <div>
//           <h3 className="font-semibold text-lg text-gray-800">
//             {title}
//           </h3>

//           {description && (
//             <p className="text-sm text-gray-500 mt-1">
//               {description}
//             </p>
//           )}
//         </div>

//       </div>

//       {/* Right Arrow */}
//       <ChevronRight
//         size={22}
//         className="text-gray-400"
//       />
//     </div>
//   );
// }


// == used google gemni code


import { ChevronRight } from "lucide-react";

export default function ProfileMenuItem({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        p-5
        flex
        items-center
        justify-between
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-lg
        hover:border-blue-300
        hover:-translate-y-1
        group
      "
    >
      {/* Left Section */}
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
            text-blue-600
            transition-colors
            duration-300
            group-hover:bg-blue-100
          "
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 transition-colors group-hover:text-blue-600">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-gray-500 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Right Arrow */}
      <ChevronRight
        size={22}
        className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500"
      />
    </div>
  );
}
