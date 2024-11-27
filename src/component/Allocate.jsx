import React from 'react';

function Allocate() {
  return (
    <section className="py-12 bg-[#07292F] max-w-[1440px]">
      <div className="container mx-auto px-6 allocate">
        {/* Header Section */}
        <div className="text-start mb-12">
          <h5 className="text-2xl sm:text-2xl font-semibold  mb-2">
            Allocate effort where your reps <br/> make an impact.
          </h5>
          <span className="text-lg sm:text-xl text-primary font-medium block mb-4">
            Let us handle the rest.
          </span>
          <p className="text-sm sm:text-base ">
            Keep your reps “in the air” -- out in the field and on the phone <br />where they can build relationships.
          </p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 sm:grid-row-1 lg:grid-cols-3 md:grid-cols-3 ">
          <div className="flex flex-col items-start rounded-lg shadow-md space-y-2 gap-0">
          <span className="text-3xl font-bold text-primary mb-2">32%</span>
          <p className="text-sm font-semibold text-secondary mb-4">Improvement in <br/>Open Rates</p>  
          </div>

          <div className="flex flex-col rounded-lg shadow-md justify-start gap-0 mr-20 ">
            
          <span className="text-3xl font-bold text-primary mb-2">75%</span>
            <p className="text-sm font-semibold text-secondary mt-4">Improvement in <br/>Ramp Time</p>
          </div>

          <div className="flex flex-col rounded-lg shadow-md">
          <span className="text-3xl font-bold text-primary mb-2">35%</span>
          <p className="text-sm font-semibold text-secondary mt-4">Improvement in <br/>Meetings Booked</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Allocate;
