import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuReceipt,
  LuLogOut,
  LuUser,
  LuMenu,
} from "react-icons/lu";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { LuChevronRight } from "react-icons/lu";
import { api } from "../../utils/api";
import Modal from "../Modal/Modal";

const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataName, setDataName] = useState("");

  // useEffect(() => {
  //   const getDashboardData = async () => {
  //     try {
  //       const response = await api.get("/dashboard/get-data");
  //       setData(response);
  //     } catch (err) {
  //       console.error(err);
  //       console.error("Dashboard load failed:", err.message);
  //     }
  //   };

  //   getDashboardData();
  // }, []); // run once on mount

  // const user = data?.userData?.[0];

  // const fullName = user
  //   ? [user.first_name, user.last_name].filter(Boolean).join(" ") || undefined
  //   : undefined;

  // FINISH THE CODE AND CREATE THE BACKEND API FOR GETTING THE NAME.
  // FINISH THE CODE AND CREATE THE BACKEND API FOR GETTING THE NAME.
  // FINISH THE CODE AND CREATE THE BACKEND API FOR GETTING THE NAME.
  // FINISH THE CODE AND CREATE THE BACKEND API FOR GETTING THE NAME.
  useEffect(() => {
    const getUserName = async () => {
      try {
        const response = await api.get("/dashboard/get-name");
        setDataName(response);
        console.success(response);
      } catch (err) {
        console.error(err);
        console.error("Dashboard load failed:", err.message);
      }
    };

    getUserName();
  }, []);

  const user = dataName?.user?.[0] || { name: "Guest" };

  console.log(user);

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LuLayoutDashboard,
      activeClass: "bg-accent-purple text-color-dark font-medium",
      inactiveClass: "text-color-dark hover:bg-gray-800",
    },
    {
      label: "Expenses",
      path: "/expenses",
      icon: LuReceipt,
      activeClass: "bg-accent-purple text-color-dark font-medium",
      inactiveClass: "text-color-dark hover:bg-gray-800",
    },
  ];
  const actions = [
    {
      icon: LuUser,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Profile",
      description: "View and edit your profile information",
      onClick: () => console.log("Profile"),
    },
    {
      icon: LuLogOut,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Logout",
      description: "Sign out of your account",
      onClick: () => setIsOpen(true),
    },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } h-screen bg-background-dark border-r border-gray-700 transition-all duration-300 flex flex-col`}
    >
      {/* Logo/Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 text-color-dark">
        <h1 className="text-xl font-semibold text-color-dark me-3">
          {collapsed ? "P" : "Paylog"}
        </h1>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-gray-700"
        >
          <LuMenu size={20} />
        </button>
      </div>

      {/* Profile Section */}
      {!collapsed && (
        <div className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <LuUser className="text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-color-dark">
                {user.name}
              </p>
              <p className="text-xs text-gray-400">Personal Account</p>
            </div>
            <Popover className="relative">
              <PopoverButton className="px-4 py-2 text-white rounded outline-none border-none">
                <LuChevronRight />
              </PopoverButton>

              <PopoverPanel
                anchor="right"
                className="absolute z-10 mt-2 border border-white/50 bg-background-dark p-3 w-auto h-auto rounded-lg"
              >
                {actions.map(
                  ({
                    icon: Icon,
                    iconBg,
                    iconColor,
                    title,
                    description,
                    onClick,
                  }) => (
                    <button
                      onClick={onClick}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-background-dark hover:bg-gray-700 transition"
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${iconBg}`}
                      >
                        <Icon className={iconColor} size={22} />
                      </div>

                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-100">
                          {title}
                        </p>
                        <p className="text-xs text-gray-400">{description}</p>
                      </div>
                    </button>
                  ),
                )}
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      )}

      {/* Menu Label */}
      {!collapsed && (
        <p className="px-6 pt-6 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Menu
        </p>
      )}

      {/* Navigation */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map(
          ({ label, path, icon: Icon, activeClass, inactiveClass }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition mx-2 ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <Icon size={20} />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ),
        )}
      </nav>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Logout"
        textColor="text-red-600"
      >
        <p>Are you sure you want to logout?</p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </Modal>
    </aside>
  );
};

export default Sidebar;
