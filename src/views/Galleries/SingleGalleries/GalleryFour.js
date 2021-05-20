import React from "react";
import { photos } from "../../../components/photos/photosFour";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GalleryFour = () => {
  return (
    <div className='single-gallery'>
      <PhotoGalleries photos={photos} />
    </div>
  );
};

export default GalleryFour;
