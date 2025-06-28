import React, { useState } from "react";
import styles from "./Home.module.css";
import Welcome from "../../Components/Welcome/Welcome";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import ImageView from "../../Components/ImageView/ImageView";

function Home({ user }) {
  const [images, setImages] = useState([]);

  const addImage = (img) => {
    setImages([...images, img]);
  };

  return (
    <div className={styles.container}>
      <Welcome name={user.name} />
      <ImageUpload onUpload={addImage} />
      <ImageView images={images} />
    </div>
  );
}

export default Home;
