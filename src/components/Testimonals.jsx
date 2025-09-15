import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Testimonials Data
const testimonials = [
  {
    name: "Emily Carter",
    role: "Travel Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This trip planner transformed how I organize my vacations! It's fast and easy to use.",
  },
  {
    name: "James Wilson",
    role: "Adventure Blogger",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Loved how simple it is to plan trips with my friends. We collaborated in real-time!",
  },
  {
    name: "Sophia Johnson",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The discovery engine helped me find hidden gems I would’ve never explored otherwise.",
  },
];

// ✅ Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition"
    onClick={onClick}
  >
    <ChevronRight size={20} />
  </button>
);

// ✅ Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition"
    onClick={onClick}
  >
    <ChevronLeft size={20} />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair-display">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 shadow-lg mb-6"
                />
                <p className="text-gray-600 italic max-w-xl mx-auto mb-6">
                  "{t.text}"
                </p>
                <div className="flex text-yellow-500 mb-4">{"★★★★★"}</div>
                <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
