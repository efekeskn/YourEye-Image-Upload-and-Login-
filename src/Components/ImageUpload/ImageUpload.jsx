import React from "react";
import styles from "./ImageUpload.module.css";

function ImageUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onUpload(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.uploadContainer}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

export default ImageUpload;
