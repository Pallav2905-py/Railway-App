"use client";

import { useState } from "react";

const Subscribe = () => {
  const [btnText, setBtnText] = useState("Subscribe");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Submitting...");
    // Add form submission logic here
    setTimeout(() => {
      setBtnText("Subscribe");
      setEmail("");
    }, 2000); // Simulate a submission delay
  };

  return (
    <section className="container mx-auto px-5 md:px-16">
      <div className="bg-red-500 rounded-lg text-white py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Stay Updated with Rail Madad
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl lg:text-base xl:text-xl">
              Subscribe to receive the latest updates and notifications about our AI-powered complaint management system.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg bg-white px-4 py-3 text-gray-800 flex-1 border-none outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
