import React from 'react';

function TrainAria() {
  return (
    <section className="py-12 bg-[#07292F] max-w-[1440px]">
      <div className="container mx-auto px-6 trainAria">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mt-16 mb-4">
            Train your aiDR on your...
          </h3>
          <span className="text-primary text-lg sm:text-xl font-medium mb-4">
            Preferred email style
          </span>
          <p className="text-sm sm:text-base text-secondary mt-4 ">
            You’re in control. Train your aiDR on elements of your Marketing strategy.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0">
          {/* Quick to Ramp */}
          <div className="flex flex-row items-center text-center justify-end mr-6">
            <img
              src="./ph_check-circle-duotone.png"
              alt="Quick to ramp"
              className=""
            />
            <p className="text-sm font-semibold text-primary">Quick to ramp</p>
          </div>

          {/* Easy to Optimize */}
          <div className="flex flex-row items-center text-center ">
            <img
              src="./ph_check-circle-duotone.png"
              alt="Easy to optimize"
              className=""
            />
            <p className="text-sm font-semibold text-primary">Easy to optimize</p>
          </div>

              {/* Quick to Scale Up */}
              <div className="flex flex-row items-center text-center justify-end mr-4">
            <img
              src="./ph_check-circle-duotone.png"
              alt="Quick to scale up"
              className=""
            />
            <p className="text-sm font-semibold text-primary">Quick to scale up</p>
          </div>

        

          {/* Works with all tools */}
          <div className="flex flex-row items-center text-center">
            <img
              src="./ph_check-circle-duotone.png"
              alt="Works with all tools"
              className=""
            />
            <p className="text-sm font-semibold text-primary">Works with all your existing tools</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainAria;
