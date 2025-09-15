import React from "react";
import { Plane, Map, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-10 h-10 text-yellow-500" />,
      title: "Intuitive Planning",
      desc: "Easily design and organize your trips with our simple drag-and-drop planner.",
    },
    {
      icon: <Map className="w-10 h-10 text-yellow-500" />,
      title: "Discovery Engine",
      desc: "Find hidden gems, local spots, and unique experiences tailored to your interests.",
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      title: "Collaborate with Friends",
      desc: "Plan your trip in real-time with friends. Share, edit, and decide together seamlessly.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair-display">
          Our Premium Services
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
