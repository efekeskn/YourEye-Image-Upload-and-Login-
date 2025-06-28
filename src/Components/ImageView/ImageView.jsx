import React from "react";
import styles from "./ImageView.module.css";

function ImageView({ images }) {
  return (
    <div className={styles.imageList}>
      {images.length === 0 && <p>Henüz fotoğraf yüklenmedi.</p>}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Yüklenen ${index + 1}`}
          className={styles.image}
        />
      ))}
    </div>
  );
}

export default ImageView;
