import React, { useState } from "react";
import "./ProfilePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("John Doe");
  const [showEditNickname, setShowEditNickname] = useState(false);
  const [newNickname, setNewNickname] = useState("");

  const [about, setAbout] = useState(
    "dedicated and passionate software engineer with a deep commitment to continuous learning and improvement. With over five years of experience in the tech industry, I specialize in developing scalable and efficient web applications. My journey in the tech world started with a Bachelor's degree in Computer Science, followed by various roles that honed my skills in technologies like React, Node.js, and cloud computing. Beyond coding, I am an advocate for clean code practices and enjoy contributing to open source projects. Outside of work, I'm an avid reader and enjoy exploring the latest trends in AI and machine learning. My goal is to leverage technology to create impactful solutions and to keep growing as a tech leader in this ever-evolving industry."
  );
  const [editAbout, setEditAbout] = useState(false);
  const [newAbout, setNewAbout] = useState(about);

  const handleChangeNickname = () => {
    setNickname(newNickname);
    setShowEditNickname(false);
  };

  const handleEditClick = () => {
    setShowEditNickname(true);
    setNewNickname(nickname); // Prepopulate with current nickname
  };

  const handleSaveAbout = () => {
    setAbout(newAbout);
    setEditAbout(false); // Exit edit mode
  };

  return (
    <div
      className="main-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div className="profile-page-container">
        <div className="user-profile">
          <div className="profile-header">
            <h2 className="user-name">{nickname}</h2>
            <p className="user-title">Software Engineer</p>
            {!showEditNickname && (
              <button onClick={handleEditClick}>Edit Nickname</button>
            )}
            {showEditNickname && (
              <div>
                <input
                  type="text"
                  value={newNickname}
                  onChange={(e) => setNewNickname(e.target.value)}
                />
                <button onClick={handleChangeNickname}>Save</button>
                <button onClick={() => setShowEditNickname(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
          <div className="profile-details">
            <h3>About Me</h3>
            {!editAbout ? (
              <div onDoubleClick={() => setEditAbout(true)}>
                <p>{about}</p>
              </div>
            ) : (
              <textarea
                value={newAbout}
                onChange={(e) => setNewAbout(e.target.value)}
                maxLength="1500"
                className="fixed-size-textarea"
                onBlur={() => setEditAbout(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSaveAbout();
                    setEditAbout(false);
                  }
                }}
                autoFocus
              />
            )}
            <div className="char-count">{newAbout.length} / 1500</div>
            <div className="reching-details">
              <p>Email: john.doe@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
