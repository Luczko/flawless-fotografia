import React from "react";
import { photos } from "../../../components/photos/photosOne";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GalleryOne = () => {
  return (
    <div className='single-gallery'>
      <PhotoGalleries photos={photos} />
    </div>
  );
};

export default GalleryOne;
