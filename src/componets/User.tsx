import React from "react";
import { UserType } from "../types/user";

type Props = {
  user: UserType;
};

const User: React.FC<Props> = ({ user }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700
                 flex flex-col 
                 sm:grid sm:grid-cols-2 
                 md:grid md:grid-cols-4
                 gap-y-2 gap-x-2 sm:gap-x-4
                 py-3 px-3 sm:px-4 
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out
                 text-sm"
    >
      <div className="flex items-center">
        <span className="sm:hidden font-semibold text-gray-700 dark:text-gray-300 mr-2">
          Name:
        </span>
        <span className="font-medium text-gray-900 dark:text-white">
          {user.name}
        </span>
      </div>

      <div className="flex items-center flex-wrap">
        <span className="sm:hidden font-semibold text-gray-700 dark:text-gray-300 mr-2">
          Email:
        </span>
        <span className="break-all whitespace-normal text-gray-600 dark:text-gray-300 break-words">
          {user.email}
        </span>
      </div>

      <div className="flex items-center">
        <span className="sm:hidden font-semibold text-gray-700 dark:text-gray-300 mr-2">
          Status:
        </span>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            user.status === "Online"
              ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
              : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
          }`}
        >
          {user.status}
        </span>
      </div>

      {/* Last Login */}
      <div className="flex items-center">
        <span className="sm:hidden font-semibold text-gray-700 dark:text-gray-300 mr-2">
          Last Login:
        </span>
        <span className="text-gray-600 dark:text-gray-300">
          {user.lastLogin}
        </span>
      </div>
    </div>
  );
};

export default User;
