// src/components/ImageUploader.jsx
// 🖼️ Seamless Image Upload Component - ImgBB Integration
import { useState } from "react";
import { Upload, X, Loader2, Image as ImageIcon, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// 🔧 CONFIGURATION - PASTE YOUR IMGBB API KEY HERE
// ============================================
const IMGBB_API_KEY = "84e690b586da3b16b315e35e3ee12d9f"; // 👈 STEP 1: Paste your ImgBB API key

// ✅ ONLY CHANGE: added onSaveToSheet prop (called after successful ImgBB upload)
function ImageUploader({ onImagesChange, onSaveToSheet, existingImages = [] }) {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [images, setImages] = useState(
    existingImages.filter(img => img && img.trim() !== "")
  );
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Pending files: selected locally but not yet uploaded to ImgBB
  const [pendingFiles, setPendingFiles] = useState([]); // [{ file, localURL }]

  // ============================================
  // 📤 UPLOAD IMAGE TO IMGBB (Single Image)
  // ============================================
  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        { method: "POST", body: formData }
      );

      const result = await response.json();

      if (result.success) {
        return result.data.url;
      } else {
        throw new Error(result.error?.message || "Upload failed");
      }
    } catch (err) {
      console.error("ImgBB upload error:", err);
      throw new Error("Failed to upload image");
    }
  };

  // ============================================
  // 📝 HANDLE FILE SELECTION → Show local preview first
  // ============================================
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const validFiles = files.filter(file => file.type.startsWith("image/"));
    if (validFiles.length === 0) {
      setError("Please select valid image files (JPG, PNG, GIF, WebP)");
      return;
    }

    const oversizedFiles = validFiles.filter(file => file.size > 32 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError("Some images are too large. Max size: 32MB per image");
      return;
    }

    setError(null);

    // Generate local object URLs for preview (no ImgBB yet)
    const previews = validFiles.map(file => ({
      file,
      localURL: URL.createObjectURL(file),
    }));

    setPendingFiles(prev => [...prev, ...previews]);
    e.target.value = "";
  };

  // ============================================
  // ✅ CONFIRM → Upload pending files to ImgBB then save to Google Sheet
  // ============================================
  const handleConfirmUpload = async () => {
    if (pendingFiles.length === 0) return;

    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      const uploadedURLs = [];
      const total = pendingFiles.length;

      for (let i = 0; i < total; i++) {
        const { file, localURL } = pendingFiles[i];
        const url = await uploadToImgBB(file);
        uploadedURLs.push(url);
        // Revoke the local object URL to free memory
        URL.revokeObjectURL(localURL);
        setUploadProgress(Math.round(((i + 1) / total) * 100));
      }

      const newImages = [...images, ...uploadedURLs];
      setImages(newImages);
      onImagesChange(newImages.join(","));
      setPendingFiles([]);

      // ✅ NEW: Save the newly uploaded ImgBB URLs to Google Sheet
      if (onSaveToSheet) {
        onSaveToSheet(uploadedURLs);
      }

    } catch (err) {
      setError(err.message || "Failed to upload images. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // ============================================
  // ❌ DISCARD pending files (cancel confirm)
  // ============================================
  const handleDiscardPending = () => {
    pendingFiles.forEach(({ localURL }) => URL.revokeObjectURL(localURL));
    setPendingFiles([]);
    setError(null);
  };

  // Remove a single pending file before confirming
  const removePending = (index) => {
    setPendingFiles(prev => {
      URL.revokeObjectURL(prev[index].localURL);
      return prev.filter((_, i) => i !== index);
    });
  };

  // ============================================
  // 🗑️ REMOVE already-uploaded image
  // ============================================
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesChange(newImages.join(","));
  };

  // ============================================
  // 🎨 RENDER COMPONENT
  // ============================================
  return (
    <div className="space-y-4">

      {/* Upload Drop Zone — hidden while pending confirmation */}
      {pendingFiles.length === 0 && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-600 transition-all duration-300 bg-gray-50">
          <input
            type="file"
            id="imageUpload"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          <label
            htmlFor="imageUpload"
            className={`cursor-pointer flex flex-col items-center gap-3 ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {uploading ? (
              <>
                <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">
                    Uploading to ImgBB... {uploadProgress}%
                  </p>
                  <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-600 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">Click to select images</p>
                  <p className="text-sm text-gray-600 mt-1">or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF, WebP • Max 32MB per image</p>
                </div>
              </>
            )}
          </label>
        </div>
      )}

      {/* ✅ CONFIRM PANEL — shown after file selection, before ImgBB upload */}
      {pendingFiles.length > 0 && !uploading && (
        <div className="border-2 border-orange-300 bg-orange-50 rounded-xl overflow-hidden flex flex-col">

          {/* Sticky Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-orange-200 bg-orange-100 flex-shrink-0">
            <p className="text-sm font-bold text-orange-800">
              📸 {pendingFiles.length} image{pendingFiles.length > 1 ? "s" : ""} selected — confirm to upload
            </p>
            <button
              type="button"
              onClick={handleDiscardPending}
              className="text-xs text-gray-500 hover:text-red-600 underline"
            >
              Discard all
            </button>
          </div>

          {/* Scrollable Preview Grid */}
          <div className="overflow-y-auto max-h-56 p-3">
            <div className="grid grid-cols-3 gap-2">
              {pendingFiles.map(({ localURL }, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden border-2 border-orange-300 shadow-sm"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={localURL}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Always-visible remove button on mobile, hover on desktop */}
                  <button
                    type="button"
                    onClick={() => removePending(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {/* Image count badge */}
                  <div className="absolute bottom-1 left-1 bg-black/60 text-white rounded px-1.5 py-0.5 text-xs font-semibold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Footer Buttons */}
          <div className="flex gap-3 p-3 border-t border-orange-200 bg-orange-50 flex-shrink-0">
            <button
              type="button"
              onClick={handleConfirmUpload}
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              Yes, Upload to Gallery
            </button>
            <button
              type="button"
              onClick={handleDiscardPending}
              className="flex items-center justify-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition text-sm"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Uploading progress (shown while ImgBB upload is in progress) */}
      {uploading && (
        <div className="border-2 border-red-200 bg-red-50 rounded-xl p-4 flex flex-col items-center gap-2">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
          <p className="text-sm font-semibold text-gray-700">Uploading to ImgBB... {uploadProgress}%</p>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold">{error}</span>
        </div>
      )}

      {/* Already-uploaded Images */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-900">
              Uploaded Images ({images.length})
            </p>
            <Button
              type="button"
              onClick={() => { setImages([]); onImagesChange(""); }}
              className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
            >
              Clear All
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((url, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border-2 border-gray-300 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={url}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999'%3EError%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-lg"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white rounded px-2 py-1 text-xs font-semibold flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {images.length === 0 && !uploading && pendingFiles.length === 0 && (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">No images uploaded yet. Click above to add images.</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;