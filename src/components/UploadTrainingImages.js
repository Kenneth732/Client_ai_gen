import React, { useState } from "react";
import "../styles/UploadTrainingImages.css";

const UploadTrainingImages = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter((file) =>
      ["image/jpeg", "image/png"].includes(file.type)
    );

    if (validFiles.length < selectedFiles.length) {
      alert("Only PNG and JPEG files are supported.");
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("Please upload at least one file.");
      return;
    }

    setIsUploading(true);
    // Simulate an upload process
    setTimeout(() => {
      alert("Files uploaded successfully!");
      setFiles([]);
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="upload-container">
      <div className="upload-wrapper">
        <div className="header-section">
          <span className="title">Upload Training Images</span>
          <div className="dropdown">
            <button className="dropdown-button">
              <p className="dropdown-text">V2</p>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <p className="description">
          Upload 10-30 images of your desired style. Drag and drop files or
          click to upload.
        </p>
        <div className="uploads">
          <div className="upload-body">
            <div
              className="upload-area"
              onDrop={(e) => {
                e.preventDefault();
                handleFileChange(e);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                type="file"
                multiple
                hidden
                onChange={handleFileChange}
                id="file-input"
              />
              <label htmlFor="file-input" className="upload-content">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-upload"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                </svg>
                <p className="upload-text">Upload Image(s)</p>
              </label>
            </div>
            <button
              className="upload-button"
              disabled={files.length === 0 || isUploading}
              onClick={handleUpload}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <div className="guidelines-box">
            <span className="guidelines-title">Guidelines & Tips</span>
            <ul className="guidelines-list">
              <li>Focus on High-Quality Images</li>
              <li>Diversify Your Dataset 🌍</li>
              <li>
                Use our guide,{" "}
                <a
                  href="https://faq.starryai.com/en/articles/7201988-how-to-build-a-good-style-dataset"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  How to build a good Style dataset
                </a>
              </li>
              <li>
                Avoid inappropriate images and follow our{" "}
                <a
                  href="https://starryai.com/content-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Content Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTrainingImages;
