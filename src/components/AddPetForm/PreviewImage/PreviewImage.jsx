import React, { useState } from 'react';

const PreviewImage = ({ photo }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(photo);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="Preview" />
    </div>
  );
};

export default PreviewImage;
