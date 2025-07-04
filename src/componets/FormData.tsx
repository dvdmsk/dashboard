import React, { useState } from "react";

const FormData = () => {
  const [username, setUsername] = useState<string>("");
  const [receiveNotifications, setReceiveNotifications] =
    useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Settings saved:
      username: ${username}
      Notifications: ${receiveNotifications ? 'turn' : 'off'}
      `);
  };

  return (
    <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name user
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Name"
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            id="notifications"
            name="notifications"
            type="checkbox"
            checked={receiveNotifications}
            onChange={(e) => setReceiveNotifications(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded
                       dark:bg-gray-700 dark:checked:bg-blue-600 dark:checked:border-blue-600"
          />
          <label
            htmlFor="notifications"
            className="ml-2 block text-sm text-gray-900 dark:text-gray-200 cursor-pointer"
          >
            Receive notifications
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
