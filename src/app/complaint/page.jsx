"use client"
import React, { useState } from 'react';
import { registerComplaint } from '../../services/api'; // Import the API function
import axios from 'axios';

const ComplaintForm = () => {
  const [pnr, setpnr] = useState(false)
  const [title, setTitle] = useState(false)
  const [description, setDescription] = useState(false)
  const [file, setFile] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('pnr', pnr)
    formdata.append('description', description)
    formdata.append('title', title)
    formdata.append('file', file)

    const {data} = await axios.post(`http://localhost:8080/api/v1/complaint/register-complaint`, formdata)
    console.log(data)
    
    if(data.sucess){
      setSubmitted(true)
    }
    
  }

  return (
    <section className="container mx-auto px-4 py-6 max-w-lg">
      <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Register a Complaint</h2>
        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="pnr" className="block text-lg font-medium">PNR No.</label>
              <input
                type="text"
                id="pnr"
                name="pnr"
                onChange={(e)=>{setpnr(e.target.value)}}
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
                onChange={(e)=>{setTitle(e.target.value)}}
                className="w-full p-2 border border-gray-300 rounded-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="block text-lg font-medium">Description</label>
              <textarea
                id="description"
                name="description"
                onChange={(e)=>{setDescription(e.target.value)}}
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
                onChange={(e)=>{setFile(e.target.files[0])}}
                className="w-full text-sm border border-gray-300 rounded-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-rose-600 text-white font-semibold rounded-sm hover:bg-rose-700 disabled:bg-gray-400"
            >Submit
            </button>
          </form>
        
      </div>
    </section>
  );
};

export default ComplaintForm;


