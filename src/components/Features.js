import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">Streamline Your Complaints</span>
      <p className="title text-center">
                  Rail Madas AI-powered complaint management system simplifies the process of reporting issues during
                  your train journey. Seamless transitions, multimedia support, and faster resolutions.
                </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="AI-Powered Categorization"
          desc="AI algorithms automatically categorize your complaints, ensuring they reach the right department.."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Complaint Form"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Chatbot Support"
          desc="Chatbot Support provides automated assistance to users, offering quick and efficient solutions to their queries"
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Complaint Status"
          desc="Complaint Status allows users to track the progress of their submitted complaints in real-time. "
        />
      </div>
    </section>
  );
};

export default Features;
