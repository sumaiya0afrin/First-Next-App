import NotFoundPage from "@/app/not-found";
import React from "react";

const ServiceDetails = ({ params }) => {
  const service = [
    {
      id: 1,
      title: "Service1",
      image: "/service_Image.jpg",
      desc: "This is a brief description of Service1, explaining its features and benefits.",
    },
    {
      id: 2,
      title: "Service2",
      image: "/service_Image.jpg",
      desc: "Service2 provides high-quality solutions to meet your needs efficiently.",
    },
    {
      id: 3,
      title: "Service3",
      image: "/service_Image.jpg",
      desc: "Experience the best performance and reliability with Service3.",
    },
  ];

  const id = params?.id;
  const singleData = service.find((d) => d.id == id);
  if (singleData) {
    return (
      <div className="card card-side flex-col md:flex-row mx-4 bg-base-100 shadow-sm max-w-2xl">
        <figure>
          <img
            src={singleData.image}
            alt={singleData.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singleData.title}</h2>
          <p>{singleData.desc}</p>
        </div>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default ServiceDetails;
