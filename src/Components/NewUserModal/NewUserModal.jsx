import React, { useState } from "react";
import styles from "./modal.module.css";
import Selector from "../../Components/Selector/Selector";

const NewUserModal = ({ show, onClose, onSave }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const roleOptions = [
    { value: "User", label: "User" },
    { value: "PermittedUser", label: "Moderator" },
  ];

  if (!show) return null;

  const handleSubmit = () => {
    onSave(username, password, role);
    onClose();
  };

  return (
    <div className={`${styles.modal} ${show ? styles.show : styles.hidden}`}>
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
      <h2>Create New User</h2>
      <div className={styles.newUserForm}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.roleSelector}>
          <Selector
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={roleOptions}
            label="Choose a role:"
          />
        </div>
      </div>
      <button onClick={handleSubmit} className={styles.saveButton}>
        Create
      </button>
    </div>
  );
};

export default NewUserModal;
