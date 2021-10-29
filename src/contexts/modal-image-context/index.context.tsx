import React from 'react';
import StbModalImage from '../../components/stb-modal-image/index.component';

const ModalImageContext = React.createContext<{ previewImage: (image: string, alt: string) => void }>({
  previewImage: () => {}
});

const ModalImageProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [preview, setPreview] = React.useState<{ image: string, alt: string } | null>(null);

  const handleClose = (): void => {
    setIsOpen(false);
  }

  const previewImage = (image: string, alt: string) => {
    setPreview({
      image,
      alt
    });
    setIsOpen(true);
  }

  return (
    <ModalImageContext.Provider value={{ previewImage }}>
      {children}
      <StbModalImage
        isOpen={isOpen}
        image={preview?.image ?? ''}
        alt={preview?.alt ?? ''}
        handleCloseModal={handleClose}
      />
    </ModalImageContext.Provider>
  );
}


export { ModalImageContext, ModalImageProvider };