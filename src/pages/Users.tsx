import React, { useMemo, useState } from "react";
import User from "../componets/User";
import { mockUsers } from "../api/users";
import { UserType } from "../types/user";

const Users = () => {
  const [sortConfig, setSortConfig] = useState<"ascending" | "descending">(
    "ascending"
  );
  const [users, setUsers] = useState<UserType[]>(mockUsers);

  const sortedUsers = useMemo(() => {
    let sortableUsers = [...users];

    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        const aValue = a["name"];
        const bValue = b["name"];

        if (typeof aValue === "string" && typeof bValue === "string") {
          if (aValue < bValue) {
            return sortConfig === "ascending" ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig === "ascending" ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [users, sortConfig]);

  const sort = () => {
    if (sortConfig === "ascending") {
      setSortConfig("descending");
      return;
    } else {
      setSortConfig("ascending");
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Users</h2>

      <div className="basis-full p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:basis-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            User List
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
            Recent Users
          </p>
        </div>

        <div className="md:grid md:grid-cols-4 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
          <div
            className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider cursor-pointer"
            onClick={() => sort()}
          >
            Name
            {sortConfig === "ascending" ? " ▲" : " ▼"}
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {sortedUsers.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
