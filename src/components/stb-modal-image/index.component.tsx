import React from 'react';
import { Lightbox } from 'react-modal-image';
import * as i from './index.interface';

const StbModalImage: React.FC<i.StbModalImageProps> = ({ isOpen, image, alt, handleCloseModal }) => {
  return (
    <React.Fragment>
      {
        isOpen &&
          <Lightbox
            medium={image}
            large={image}
            alt={alt}
            onClose={handleCloseModal}
          />
      }
    </React.Fragment>
  );
}

export default React.memo(StbModalImage);