import { useState } from "react";
import {
  LuLayoutDashboard,
  LuReceipt,
  LuMenu,
  LuLogOut,
  LuUser,
} from "react-icons/lu";
import Modal from "../Modal/Modal";

const Sidebar = ({ onLogout }) => {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-60"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
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

      {/* Logout Button */}
      {/* <div className="flex border-t border-b border-gray-500 my-4">
        {!collapsed && <span>Logout</span>}
        <button className="flex items-center justify-center w-full gap-3 px-4 py-3 cursor-pointer rounded-lg transition hover:text-accent-lightPurple">
          <LuUser />
          Profile
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-full gap-3 px-4 py-3 cursor-pointer rounded-lg transition hover:text-accent-red"
        >
          <LuLogOut />
        </button>

        
      </div> */}
      {collapsed ? (
        // Collapsed: show only icons
        <div className="flex items-center justify-center gap-4 px-2 py-3 border-t border-b border-gray-500 my-4">
          <LuUser className="cursor-pointer hover:text-accent-lightPurple" />
        </div>
      ) : (
        // Expanded: show full buttons
        <div className="flex border-t border-b border-gray-500 my-4">
          <button className="flex items-center justify-center w-full gap-3 px-3 py-3 cursor-pointer rounded-lg transition hover:text-accent-lightPurple">
            <LuUser />
            Profile
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-full gap-3 px-4 py-3 cursor-pointer rounded-lg transition hover:text-accent-red"
          >
            <LuLogOut />
            Logout
          </button>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Logout"
        textColor="text-red-600"
      >
        <p>Are you sure you want to logout?</p>
        <div className="flex items-center justify-end gap-4 mt-4">
          <button
            className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-100 hover:border-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="px-6 py-2 rounded-lg bg-red-100 text-red-700 font-medium shadow-sm hover:bg-red-200 hover:shadow-md transition"
          >
            Logout
          </button>
        </div>
      </Modal>
      {/* Menu */}
      <nav className="flex-1 mt-4 space-y-2">
        {/* Dashboard */}
        <div
          onClick={() => setActive("dashboard")}
          className={`flex items-center justify-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
            ${active === "dashboard" ? "bg-accent-purple" : "hover:bg-gray-800"}`}
        >
          <LuLayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </div>

        {/* Expenses */}
        <div
          onClick={() => setActive("expenses")}
          className={`flex items-center justify-center gap-4 px-4 py-3 cursor-pointer rounded-lg mx-2 transition
            ${active === "expenses" ? "bg-accent-purple" : "hover:bg-gray-800"}`}
        >
          <LuReceipt size={20} />
          {!collapsed && <span>Expenses</span>}
        </div>
      </nav>
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
