// import { Bell } from "lucide-react";

// export default function Header() {
//   return (
//     <div className="flex justify-between items-center mb-6">
//       <div className="flex gap-3">
//         <div className="w-14 h-14 rounded-full bg-gray-200"></div>

//         <div>
//           <h1 className="text-3xl font-bold">
//             Hey, there! 👋
//           </h1>

//           <p className="text-gray-500">
//             How have you been?
//           </p>
//         </div>
//       </div>

//       <button className="bg-blue-700 p-4 rounded-xl">
//         <Bell color="white"/>
//       </button>
//     </div>
//   );
// }


import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <UserCircle
                size={42}
                className="text-blue-600"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Hey, There! 👋
              </h1>

              <p className="text-gray-500">
                Welcome back to Direct Credit
              </p>
            </div>

          </div>

          {/* Right Section */}

          <div className="flex items-center gap-4">

            <button
              className="
              relative
              bg-blue-600
              text-white
              p-3
              rounded-xl
              hover:bg-blue-700
              transition
              "
            >
              <Bell size={22} />

              <span
                className="
                absolute
                -top-1
                -right-1
                w-5
                h-5
                bg-red-500
                rounded-full
                text-xs
                flex
                items-center
                justify-center
                "
              >
                3
              </span>
            </button>

            <div className="hidden md:block text-right">
              <h3 className="font-semibold">
                DC Developer
              </h3>

              <p className="text-sm text-gray-500">
                Premium Member
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}