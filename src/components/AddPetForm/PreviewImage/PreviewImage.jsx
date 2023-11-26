import React, { useState } from 'react';
import { Image } from './PreviewImage.styled';

const PreviewImage = ({ photo }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(photo);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return <Image src={preview} alt="Preview" />;
};

export default PreviewImage;
