import {
  Home,
  CreditCard,
  Gauge,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">
              Direct Credit
            </div>
          </div>

          {/* Menu */}

          <div className="flex items-center gap-4">

            <NavLink
              to="/"
              className={navClass}
            >
              <Home size={18} />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/cards"
              className={navClass}
            >
              <CreditCard size={18} />
              <span>Cards</span>
            </NavLink>

            <NavLink
              to="/credit-score"
              className={navClass}
            >
              <Gauge size={18} />
              <span>Credit Score</span>
            </NavLink>

            <NavLink
              to="/profile"
              className={navClass}
            >
              <User size={18} />
              <span>Profile</span>
            </NavLink>

          </div>

        </div>

      </div>
    </nav>
  );
}