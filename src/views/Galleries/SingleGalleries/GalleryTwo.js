import React from "react";
import { photos } from "../../../components/photos/photosTwo";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GalleryTwo = () => {
  return (
    <div className='single-gallery'>
      <PhotoGalleries photos={photos} />
    </div>
  );
};

export default GalleryTwo;
