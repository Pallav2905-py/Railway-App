"use client";

import { useState } from "react";

const ComplaintForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audio, setAudio] = useState(null);
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("Low");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    // For now, we'll just set submitted to true
    setSubmitted(true);
  };

  return (
    <section className="container mx-auto px-4 py-6 max-w-lg">
      <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Register a Complaint</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded border border-green-200">
            <p>Your complaint has been registered successfully. You will receive an acknowledgment with a unique ID shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="title" className="block text-lg font-medium">Complaint Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-100 rounded-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="block text-lg font-medium">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-sm"
                rows="3"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="photos" className="block text-lg  font-medium">Photos</label>
              <input
                type="file"
                id="photos"
                multiple
                onChange={(e) => setPhotos(Array.from(e.target.files))}
                className="w-full text-sm border border-gray-300 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="videos" className="block text-lg font-medium">Videos</label>
              <input
                type="file"
                id="videos"
                multiple
                accept="video/*"
                onChange={(e) => setVideos(Array.from(e.target.files))}
                className="w-full text-sm border border-gray-300 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="category" className="block text-lg font-medium">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              >
                <option value="">Select Category</option>
                <option value="cleanliness">Cleanliness</option>
                <option value="damage">Damage</option>
                <option value="staff-behaviour">Staff Behaviour</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="urgency" className="block text-lg font-medium">Urgency</label>
              <select
                id="urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="location" className="block text-lg font-medium">Location (optional)</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-sm"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-3 bg-rose-600 text-white font-semibold rounded-sm hover:bg-rose-700 "
            >
              Submit Complaint
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ComplaintForm;
