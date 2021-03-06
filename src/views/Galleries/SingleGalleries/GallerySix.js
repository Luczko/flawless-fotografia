import React from "react";
import { photos } from "../../../components/photos/photosSix";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GallerySix = () => {
  return (
    <div className='single-gallery'>
      <PhotoGalleries photos={photos} />
    </div>
  );
};

export default GallerySix;
