import React from "react";

const CardEducation = ({ src, alt, title, subtitle }) => {
  return (
    <div className="w-[400px] h-[200px] p-4 flex flex-col justify-between text-center shadow-xl">
      <div className="max-w-[100px] h-[100px] mx-auto">
        <img src={src} alt={alt}  className="w-full h-full object-contain"/>
      </div>
      <h3 className="text-black-500">{title}</h3>
      <p className="text-black-500">{subtitle}</p>
    </div>
  );
};

const Education = () => {
  return (
    <div className="container mx-auto px-4 mt-8 border-black size=30px md:grid-cols-2">
      <h1 className="text-center text-3xl font-bold mb-4">Education</h1>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="">
          <CardEducation
            src="logo-unnes.avif"
            alt="logo"
            title="Semarang State University"
            subtitle="Electrical Enginerring"
          />
        </div>
        <div>
          <CardEducation
            src="logo-purwadhika.avif"
            alt="logo"
            title="Purwadhika Digital Technology School"
            subtitle="Fullstack Web Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
