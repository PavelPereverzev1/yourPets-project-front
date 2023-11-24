import React, { useState } from 'react';

const PreviewImage = ({ file }) => {
  console.log('PreviewImage file', file);
  const [preview, setPreview] = useState(null);
  console.log('PreviewImage preview before', preview);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log('readerResult', reader.result);
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="Preview" width="200px" height="200px" />
    </div>
  );
};

export default PreviewImage;
