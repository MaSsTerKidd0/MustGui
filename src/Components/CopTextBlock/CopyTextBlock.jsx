// CopyTextBlock.js
import React, { useEffect, useState } from "react";
import styles from "./CopyTextBlock.module.css";
import CopyIcon from "../../assets/pictures/CopyIcon.png";
import axios from "axios";

const CopyTextBlock = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchPublicKey = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/rsa/public", {
          responseType: "text",
        });
        setText(response.data); // Set PEM text directly
      } catch (error) {
        console.error(
          "There was a problem with the Axios operation:",
          error.message
        );
      }
    };

    fetchPublicKey();
  }, []);

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch (err) {
      alert("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <button onClick={copyTextToClipboard} className={styles.copyButton}>
        <img src={CopyIcon} style={{ width: "100%", height: "100%" }} />
      </button>
    </div>
  );
};

export default CopyTextBlock;
