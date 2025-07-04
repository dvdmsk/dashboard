import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { name: "Overview", path: "/overview" },
  { name: "Users", path: "/users" },
  { name: "Settings", path: "/settings" },
];

export default function Layout() {
  const location = useLocation();

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <aside
        className={`${
          isSidebar ? "w-64" : "w-14"
        } z-1 border-r dark:border-gray-700 [box-shadow:2px_0_10px_rgba(0,0,0,0.1)] dark:[box-shadow:2px_0_10px_rgba(255,255,255,0.1)] origin-left bg-white dark:bg-gray-800 p-4 text-black dark:text-white md:relative fixed h-screen transition-all`}
      >
        <div
          className="pb-8 hover:cursor-pointer"
          onClick={() => setIsSidebar((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <nav className={`space-y-2 ${isSidebar ? "block" : "hidden"}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                location.pathname.includes(item.path) ? "font-bold" : ""
              } transition-all duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main
        className={`${
          isSidebar ? "" : "ml-14"
        } flex-1 p-6 text-black dark:text-white overflow-y-auto max-h-screen`}
      >
        <Outlet />
      </main>
    </div>
  );
}
