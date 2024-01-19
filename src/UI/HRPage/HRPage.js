import React, { useState, useEffect } from "react";
import styles from "./HRPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AdminUserManagement = () => {
  const users = [
    { id: 1, username: "user1", createDate: "2023-01-01", role: "User" },
    { id: 2, username: "user2", createDate: "2023-01-02", role: "User" },
    { id: 3, username: "user3", createDate: "2023-01-28", role: "Moderator" },
    { id: 4, username: "user4", createDate: "2023-07-12", role: "User" },
    { id: 5, username: "user5", createDate: "2023-04-17", role: "Moderator" },
    { id: 6, username: "user6", createDate: "2023-09-23", role: "Moderator" },
    { id: 7, username: "user7", createDate: "2023-02-15", role: "User" },
    { id: 8, username: "user8", createDate: "2023-06-09", role: "User" },
    { id: 9, username: "user9", createDate: "2023-05-20", role: "Moderator" },
    { id: 10, username: "user10", createDate: "2023-03-11", role: "User" },
    { id: 11, username: "user11", createDate: "2023-08-05", role: "Moderator" },
    { id: 12, username: "user12", createDate: "2023-10-19", role: "Moderator" },
    { id: 13, username: "user13", createDate: "2023-11-22", role: "User" },
    { id: 14, username: "user14", createDate: "2023-12-13", role: "User" },
    { id: 15, username: "user15", createDate: "2023-04-07", role: "Moderator" },
    { id: 16, username: "user16", createDate: "2023-05-18", role: "Moderator" },
    { id: 17, username: "user17", createDate: "2023-06-22", role: "User" },
    { id: 18, username: "user18", createDate: "2023-07-03", role: "User" },
    { id: 19, username: "user19", createDate: "2023-08-14", role: "Moderator" },
    { id: 20, username: "user20", createDate: "2023-09-25", role: "User" },
  ];

  // State for window dimensions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1); // Added this line
  const [usersPerPage, setUsersPerPage] = useState(
    calculateUsersPerPage(windowWidth, windowHeight)
  );
  const [totalPages, setTotalPages] = useState(
    Math.ceil(users.length / usersPerPage)
  );

  // Handlers for user actions
  const handleAddUser = () => {
    /* ... */
  };
  const handleRemoveUser = () => {
    /* ... */
  };
  const handleChangeRole = (userId, newRole) => {
    /* ... */
  };

  // Pagination handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // Now works correctly
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages)); // Now works correctly
  };

  // Calculate the users to be shown on the current page
  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Handle window resizing
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setUsersPerPage(
      calculateUsersPerPage(window.innerWidth, window.innerHeight)
    );
  };

  // Effect for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect for pagination updates
  useEffect(() => {
    setTotalPages(Math.ceil(users.length / usersPerPage));
    setCurrentPage((prev) => Math.min(prev, totalPages)); // Ensure currentPage is not out of range
  }, [windowWidth, windowHeight, usersPerPage, users.length, totalPages]);
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.contentWrap}>
          <div className={styles.adminUserManagement}>
            <h1>User Management</h1>
            <button type="button" onClick={handleAddUser}>
              Add New User
            </button>
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
                {paginatedUsers.map(({ id, username, createDate, role }) => (
                  <tr key={id}>
                    <td>{username}</td>
                    <td>{createDate}</td>
                    <td>••••••••</td>
                    <td>
                      <select
                        value={role}
                        onChange={(e) => handleChangeRole(id, e.target.value)}
                      >
                        <option value="User">User</option>
                        <option value="Moderator">Moderator</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleRemoveUser(id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                ◄
              </button>
              {/* Page Number Indicator (Optional) */}
              <span
                className={styles.pageNumber}
              >{`${currentPage} of ${totalPages}`}</span>
              <button
                type="button"
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
    </>
  );
};
function calculateUsersPerPage(width, height) {
  const area = width * height;
  if (area > 3000000) return 15; // Large screens
  else if (area > 2000000) return 10; // Medium screens
  else if (area > 1000000) return 7; // Small-medium screens
  else return 5; // Small screens
}

export default AdminUserManagement;
