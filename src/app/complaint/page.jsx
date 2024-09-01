import React, { useState } from 'react';
import { registerComplaint } from '../../services/api'; // Import the API function

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pnr: '',
    file: null, // Initialize file as null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] }); // Handle single file upload
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) return 'Title is required';
    if (!formData.description.trim()) return 'Description is required';
    if (!formData.pnr.trim()) return 'PNR is required';
    if (!formData.file) return 'File is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
  
    setLoading(true);
    setError('');
  
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
  
      const response = await registerComplaint(formDataToSend); // Use the API function
  
      if (response) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError(err.response?.data?.message || 'An error occurred while submitting the complaint');
    } finally {
      setLoading(false);
    }
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
              <label htmlFor="pnr" className="block text-lg font-medium">PNR No.</label>
              <input
                type="text"
                id="pnr"
                name="pnr"
                value={formData.pnr}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="title" className="block text-lg font-medium">Complaint Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="block text-lg font-medium">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm"
                rows="3"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="file" className="block text-lg font-medium">Upload File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="w-full text-sm border border-gray-300 rounded-sm"
                required
              />
            </div>
            {error && (
              <div className="bg-red-100 text-red-800 p-2 rounded">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-3 bg-rose-600 text-white font-semibold rounded-sm hover:bg-rose-700 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Complaint'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ComplaintForm;


