import React from "react";
import "./HRPage.css"; // Importing the CSS file
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
    { id: 1, username: "user1", createDate: "2023-01-01", role: "Normal User" },
    { id: 2, username: "user2", createDate: "2023-01-02", role: "Moderator" },
    // Add more users as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="admin-user-management">
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.createDate}</td>
                <td>••••••••</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleChangeRole(user.id, e.target.value)}
                  >
                    <option value="Normal User">Normal User</option>
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
      </div>
      <Footer />
    </div>
  );
};

export default AdminUserManagement;
