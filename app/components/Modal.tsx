"use client"

import React from 'react';

type ModalProps = {
  previewUrl: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ previewUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl h-3/4 overflow-auto">
        <div className="modal-header p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Website Preview</h3>
          <button className="btn btn-sm btn-error" onClick={onClose}>Close</button>
        </div>
        <div className="modal-body p-4">
          <iframe src={previewUrl} className="w-full h-full rounded" title="Website Preview"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
