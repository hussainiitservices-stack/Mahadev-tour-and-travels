"use client";

// ✅ CHANGE 1: added useEffect to the import (was only useState before)
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ImageUploader from "@/components/ImageUploader";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";

const ADMIN_PASSWORD = "mahadev@admin"; // change password here

// ✅ CHANGE 2: added the Google Apps Script URL constant
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbx0X00W4dOiNjKqhHTs0xhpsqIKItttIaFpHIWZ_j21UMk2Uy7cxsMvlIHRr-VF1z7c/exec";

export default function ImagesPage() {
  const [showModal, setShowModal] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<string[]>([]);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // ✅ CHANGE 3: fetch images from Google Sheet on page load
  useEffect(() => {
    fetch(`${SHEET_API_URL}?action=getGallery`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.images.length > 0) {
          setImages(data.images);
        }
      })
      .catch((err) => console.error("Failed to load gallery from sheet:", err));
  }, []);

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };

  const handleImagesChange = (imageString: string) => {
    const arr = imageString.split(",").filter(Boolean);
    setImages(arr);
  };

  // ✅ CHANGE 4: new function — saves newly uploaded URLs to Google Sheet
  const handleSaveToSheet = (newURLs: string[]) => {
    fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({ action: "addImages", urls: newURLs }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          console.error("Failed to save to sheet:", data.message);
        }
      })
      .catch((err) => console.error("Sheet save error:", err));
  };

  // Lightbox helpers
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-dark py-32 pt-40">
        <div className="container mx-auto px-4 text-center relative">

          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Gallery
            </span>

            <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
              Travel <span className="text-gradient-orange">Memories</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Explore journeys captured during our trips across India.
              Every image tells a story of travel, adventure, and memories.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 relative">

          {/* PLUS BUTTON — top-right of gallery section */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute right-4 -top-6 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
            title="Add images"
          >
            <Plus size={22} />
          </button>

          {images.length === 0 && (
            <div className="text-center text-muted-foreground py-24">
              No images uploaded yet
            </div>
          )}

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((url, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="break-inside-avoid overflow-hidden rounded-xl shadow hover:scale-[1.02] transition cursor-pointer"
              >
                <img
                  src={url}
                  alt={`gallery-${i}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <img
            src={images[lightboxIndex]}
            alt={`lightbox-${lightboxIndex}`}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full relative flex flex-col max-h-[90vh]">

            {/* STICKY HEADER */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
              <h2 className="text-xl font-bold">
                {!authenticated ? "Admin Access" : "Upload Gallery Images"}
              </h2>
              <button
                onClick={() => { setShowModal(false); setAuthenticated(false); setPassword(""); }}
                className="text-gray-400 hover:text-black transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="overflow-y-auto flex-1 px-6 py-5">
              {!authenticated ? (
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-500">Enter your admin password to upload images.</p>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
                  />
                  <button
                    onClick={handlePasswordSubmit}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 w-full font-semibold"
                  >
                    Unlock Upload
                  </button>
                </div>
              ) : (
                <ImageUploader
                  existingImages={images}
                  onImagesChange={handleImagesChange}
                  onSaveToSheet={handleSaveToSheet}
                />
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}