import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HRPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewUserModal from "../../Components/NewUserModal/NewUserModal";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for window dimensions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(
    calculateUsersPerPage(windowWidth, windowHeight)
  );
  const [totalPages, setTotalPages] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    setShowModal(true);
  };

  const handleSaveNewUser = async (username, password, role) => {
    // API call to save the new user
    try {
      const payload = { username, password, role };
      await axios.post("http://127.0.0.1:8080/HR/insertUser", payload);
      setShowModal(false);
      // Optionally refresh user list or handle updates
    } catch (error) {
      console.error("Failed to add user:", error);
    }
    setShowModal(false);
  };

  const handleRemoveUser = async (username) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/HR/deleteUser/${username}`);
      // Optionally refresh user list or handle updates
      const updatedUsers = users.filter((user) => user.username !== username);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Failed to remove user:", error);
    }
  };

  const handleChangeRole = (username, newRole) => {
    // Implement the logic to change the role of the user with the given username
    console.log("Change role for user:", username, "to", newRole);
  };

  // Pagination handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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

  // Fetch users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://127.0.0.1:8080/HR/getUsers");
        setUsers(response.data);
        setTotalPages(Math.ceil(response.data.length / usersPerPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [usersPerPage]);

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
    setCurrentPage((prev) => Math.min(1, totalPages));
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
            {/* Render the NewUserModal here */}
            <NewUserModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onSave={handleSaveNewUser}
            />
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Create Date</th>
                  <th>Password</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map(
                  ({ username, created_at, password, role }) => (
                    <tr key={username}>
                      <td>
                        <button
                          className={styles.removeBtn}
                          type="button"
                          onClick={() => handleRemoveUser(username)}
                        >
                          <span>CONFIRM DELETE</span>
                          {/* SVG code here */}
                        </button>
                        {username}
                      </td>
                      <td>
                        {new Date(created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </td>
                      <td>{password}</td>
                      <td>
                        <select
                          value={role}
                          onChange={(e) =>
                            handleChangeRole(username, e.target.value)
                          }
                          className={styles.select}
                        >
                          <option value="User">User</option>
                          <option value="PermittedUser">Moderator</option>
                        </select>
                      </td>
                    </tr>
                  )
                )}
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
              <span className={styles.pageNumber}>
                {`${currentPage} of ${totalPages}`}
              </span>
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
  if (area > 3000000) return 15;
  else if (area > 2000000) return 10;
  else if (area > 1000000) return 7;
  else return 5;
}

export default AdminUserManagement;
