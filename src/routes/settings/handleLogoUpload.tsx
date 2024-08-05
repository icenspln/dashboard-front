//import React, { useState } from 'react';
import UploadIconSvg from '../../assets/icons/UploadIconSvg';

export default function LogoUpload()  {
//  const [selectedFile, setSelectedFile] = useState<File | null>(null);
//
//  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//    if (event.target.files && event.target.files[0]) {
//      setSelectedFile(event.target.files[0]);
//    }
//  };
//
//  const handleUpload = async () => {
//    if (!selectedFile) return;
//
//    const formData = new FormData();
//    formData.append('logo', selectedFile);
//
//    try {
//      const response = await fetch('/api/upload-logo', {
//        method: 'POST',
//        body: formData,
//      });
//
//      if (response.ok) {
//        alert('Logo uploaded successfully!');
//        
//      } else {
//        alert('Failed to upload logo.');
//      }
//    } catch (error) {
//      console.error('Error uploading logo:', error);
//      alert('Error uploading logo.');
//    }
//  };
//
  return (
    <div className="flex items-center gap-[15px] w-[300px] h-[140px] border-2 border-dashed rounded mt-3 p-3">
      <input type="file" accept="image/*"  className="hidden" id="logo-upload" />
      <label htmlFor="logo-upload" className="cursor-pointer flex items-center gap-2">
        <span className="mr-3"><UploadIconSvg /></span>
        <p className="text-xl text-gray-400">ضع الايقونة هنا أو اضغط لاختيارها</p>
      </label>
     
    </div>
  );
};


