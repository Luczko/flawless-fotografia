import React from "react";
import { photosValentine } from "../../../components/photos/photosValentine";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GalleryValentine = () => {
  return (
    <div>
      <PhotoGalleries photos={photosValentine} />
    </div>
  );
};

export default GalleryValentine;
