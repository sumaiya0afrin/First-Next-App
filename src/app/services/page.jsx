import Link from "next/link";
import React from "react";

const Service = () => {
  const service = [
    {
      id: 1,
      title: "Service1",
      image: "/service_Image.jpg",
    },
    {
      id: 2,
      title: "Service2",
      image: "/service_Image.jpg",
    },
    {
      id: 3,
      title: "Service3",
      image: "/service_Image.jpg",
    },
  ];
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="grid md:grid-cols-3 gap-6">
          {service.map((serv) => (
            <div key={serv.id} className="card bg-base-100 shadow-sm">
              <figure>
                <img src={serv.image} alt={serv.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{serv.title}</h2>
                <Link
                  href={`/services/${serv.id}`}
                  className="card-actions justify-end"
                >
                  <button className="btn">Show Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
