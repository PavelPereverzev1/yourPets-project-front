import React, { setState, useRef } from 'react';

const ImageForm = props => {
  const [uploadImage, setUploadImage] = setState(props.data.file);
  const [uploadedImage, setUploadedImage] = setState(false);

  const handleImageChange = e => {
    const uploadfile = e.target.files[0];

    if (uploadfile) {
      const newImage = URL.createObjectURL(uploadfile);
      setUploadImage(newImage);
      setUploadedImage(true);
    }
  };

  const fileRef = useRef(props.data.file);
  console.log('fileRef', fileRef.current);
  return (
    <div>
      <img src={uploadImage} alt="Pet" />
      <input
        id="file-upload"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileRef}
      />
      <label htmlFor="file-upload">Upload</label>

      {/* {values.file !== null && <PreviewImage file={values.file} />} */}
      {/* <button
                type="button"
                onClick={() => {
                  console.log('file when onClick', values.file);
                  fileRef.current.click();
                }}
              >
                Upload
              </button> */}
    </div>
  );
};

export default ImageForm;
