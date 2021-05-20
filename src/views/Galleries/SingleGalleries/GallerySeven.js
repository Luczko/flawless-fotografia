import React from "react";
import { photos } from "../../../components/photos/photosSeven";
import PhotoGalleries from "../../../components/PhotoGalleries/PhotoGalleries";

import "./SingleGalleries.css";

const GallerySeven = () => {
  return (
    <div className='single-gallery'>
      <PhotoGalleries photos={photos} />
    </div>
  );
};

export default GallerySeven;
