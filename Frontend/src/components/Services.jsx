import React from "react";
import birthday from "../assets/birthday.jpg";
import anniversary from "../assets/anniversary.jpg";
import camping from "../assets/camping.jpg";
import gameNight from "../assets/gamenight.jpg";
import party from "../assets/party.jpg";
import wedding from "../assets/wedding.jpg";

const Services = () => {
  const services = [
    { id: 1, url: birthday, title: "Birthday Planning" },
    { id: 2, url: anniversary, title: "Anniversary Planning" },
    { id: 3, url: camping, title: "Camping Trip Planning" },
    { id: 4, url: gameNight, title: "Game Night Planning" },
    { id: 5, url: party, title: "Party Planning" },
    { id: 6, url: wedding, title: "Wedding Planning" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((element) => {
          return (
            <div key={element.id} className="relative group rounded-lg overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src={element.url}
                alt={element.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg font-bold">{element.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
