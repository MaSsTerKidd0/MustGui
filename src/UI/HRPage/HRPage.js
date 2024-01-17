import React, { useState } from "react";
import styles from "./HRPage.module.css"; // Importing the CSS file
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AdminUserManagement = () => {
  // Placeholder functions, replace with actual logic
  const handleAddUser = () => {
    /* ... */
  };
  const handleRemoveUser = () => {
    /* ... */
  };
  const handleChangeRole = (userId, newRole) => {
    /* ... */
  };

  // Dummy data, replace with actual data
  const users = [
    { id: 1, username: "user1", createDate: "2023-01-01", role: "User" },
    { id: 2, username: "user2", createDate: "2023-01-02", role: "User" },
    { id: 3, username: "user3", createDate: "2023-01-28", role: "Moderator" },
    { id: 4, username: "user4", createDate: "2023-07-12", role: "User" },
    { id: 5, username: "user5", createDate: "2023-04-17", role: "Moderator" },
    { id: 6, username: "user6", createDate: "2023-09-23", role: "Moderator" },
    // Add more users as needed
  ];

  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.contentWrap}>
        <div className={styles.adminUserManagement}>
          <h1>User Management</h1>
          <button onClick={handleAddUser}>Add New User</button>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Create Date</th>
                <th>Password</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.createDate}</td>
                  <td>••••••••</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleChangeRole(user.id, e.target.value)
                      }
                    >
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveUser(user.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              ◄
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              ►
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminUserManagement;
