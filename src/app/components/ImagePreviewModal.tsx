
import React from 'react';

interface ImagePreviewModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImagePreviewModal = ({ src, alt, onClose }: ImagePreviewModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors z-[210]"
      >
        ✕
      </button>
      
      <div 
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        />
        <div className="absolute -bottom-10 left-0 right-0 text-center">
          <p className="text-white/80 text-sm font-medium">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
