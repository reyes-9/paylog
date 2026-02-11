import { useState } from "react";
import { LuLayoutDashboard, LuReceipt, LuMenu, LuLogOut } from "react-icons/lu";

const Sidebar = ({ onLogout }) => {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">{collapsed ? "P" : "Paylog"}</h1>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-800 transition"
        >
          <LuMenu size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4 space-y-2">
        {/* Dashboard */}
        <div
          onClick={() => setActive("dashboard")}
          className={`flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
            ${active === "dashboard" ? "bg-accent-purple" : "hover:bg-gray-800"}`}
        >
          <LuLayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </div>

        {/* Expenses */}
        <div
          onClick={() => setActive("expenses")}
          className={`flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
            ${active === "expenses" ? "bg-blue-600" : "hover:bg-gray-800"}`}
        >
          <LuReceipt size={20} />
          {!collapsed && <span>Expenses</span>}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-800 p-4">
        <button
          onClick={onLogout}
          className="flex items-center gap-4 px-4 py-3 w-full rounded-lg hover:bg-red-600 transition"
        >
          <LuLogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

// import { useState } from "react";
// import { LuLayoutDashboard, LuReceipt, LuMenu } from "react-icons/lu";

// const Sidebar = () => {
//   const [active, setActive] = useState("dashboard");
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`${
//         collapsed ? "w-20" : "w-64"
//       } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-800">
//         <h1 className="text-lg font-semibold">{collapsed ? "P" : "Paylog"}</h1>

//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-2 rounded hover:bg-gray-800 transition"
//         >
//           <LuMenu size={20} />
//         </button>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 mt-4 space-y-2">
//         {/* Dashboard */}
//         <div
//           onClick={() => setActive("dashboard")}
//           className={`flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
//             ${active === "dashboard" ? "bg-accent-purple" : "hover:bg-gray-800"}`}
//         >
//           <LuLayoutDashboard size={20} />
//           {!collapsed && <span>Dashboard</span>}
//         </div>

//         {/* Expenses */}
//         <div
//           onClick={() => setActive("expenses")}
//           className={`flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
//             ${active === "expenses" ? "bg-blue-600" : "hover:bg-gray-800"}`}
//         >
//           <LuReceipt size={20} />
//           {!collapsed && <span>Expenses</span>}
//         </div>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
