import React from "react";
import { photosDance } from "../../../components/photos/photosDance";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GalleryValentine = () => {
  return (
    <div>
      <PhotoGalleries photos={photosDance} />
    </div>
  );
};

export default GalleryValentine;
