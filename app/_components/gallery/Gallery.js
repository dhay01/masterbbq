"use client"
import React, { useState, useEffect } from 'react';

const PhotoGallery = ({ photos }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageUrl) => {
        setModalOpen(true);
        setModalImage(imageUrl);
    };

    // Handle modal close on outside click
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal')) {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        const clickOutsideListener = document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick); // Cleanup
    }, [modalOpen]); // Only add listener when modal is open

    return (
        <div className=" container m-auto mt-10 mb-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
                <div key={photo.id} className="gallery-item" onClick={() => openModal(photo.link)}>
                    <img src={photo.link} alt="Photo" className="object-cover h-40 w-full rounded-lg" />
                </div>
            ))}
            <Modal open={modalOpen}>
                <img src={modalImage} alt="Modal Photo" className="object-cover h-auto w-full" />
            </Modal>
        </div>
    );
};

const Modal = ({ open, children }) => {
    return (
        <div className={`modal fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center scroll-none items-center w-full h-full bg-black bg-opacity-50 ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
            <div className="modal-box bg-gray-950 p-4 rounded shadow-lg">{children}</div>
        </div>
    );
};

export default PhotoGallery;
