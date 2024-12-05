import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";

const BiCurePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 via-pink-20 to-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 md:py-16 text-center">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-gray-800">
            Welcome to Bi Cure AI
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            At Bi Cure AI, we believe in the power of early detection in battling breast cancer. Early diagnosis can
            significantly improve prognosis and survival rates. Join us in spreading awareness and staying informed.
          </p>
          <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </section>

        <section className="mt-12 md:mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <Card
            imageSrc="/assets/leftpicture.jpg"
            title="Early Detection Insights"
            description="Understand the importance of early diagnosis and the methods that can save lives."
            />
            <Card
              imageSrc="/assets/rightpicture.jpg"
              title="Join Our Support Network"
              description="Connect with a community that fosters support, awareness, and empowerment."
            />
          </section>
        </main>
        <Footer />
      </div>
); 
}; 

export default BiCurePage;