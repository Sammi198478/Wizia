import React from 'react';

function Vision() {
  return (
    <section className="py-12 bg-[#07292F] max-w-[1440px] ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-xl font-semibold text-primary">Our Trusted Partners</p>
          <img 
            src="./Logos.png" 
            alt="Partner Logos" 
            className="max-w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
}

export default Vision;
