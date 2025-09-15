import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair-display text-center">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="mb-8 text-lg text-gray-600 text-center">
            Have questions or want to plan your next trip? We’d love to hear from you!
          </p>

          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image + Overlay Info */}
        <div className="relative h-[600px] rounded-2xl shadow-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')",
            }}
          ></div>
          {/* Softer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

          {/* Info Boxes */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center gap-6 px-6">
            <div className="bg-white/95 p-6 rounded-xl shadow-lg w-72 text-center">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">📍 Address</h3>
              <p className="text-gray-700">123 Travel Street, Adventure City</p>
            </div>
            <div className="bg-white/95 p-6 rounded-xl shadow-lg w-72 text-center">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">📞 Phone</h3>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="bg-white/95 p-6 rounded-xl shadow-lg w-72 text-center">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">📧 Email</h3>
              <p className="text-gray-700">info@tripplanner.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
