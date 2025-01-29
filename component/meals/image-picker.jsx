"use client";

import React, { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={style.picker}>
      <label htmlFor="image">{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              fill
              alt="The image selected by the user."
            />
          ) : (
            <p>No image picked yet</p>
          )}
        </div>
        <input
          ref={inputRef}
          className={style.input}
          type="file"
          id="image"
          accept="image/png , image.jpg"
          name={name}
          onChange={handleImage}
          required
        />
        <button className={style.button} onClick={handleClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
