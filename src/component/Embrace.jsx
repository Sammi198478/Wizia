import React from 'react';
import { Button } from '@nextui-org/button';

function Embrace() {
  return (
    <>
      <section className="py-16 px-4 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="text-center  md:w-1/2">
            <span className="text-sm text-primary font-semibold text-center">GET STARTED</span>
            <h5 className="mt-2 text-2xl font-bold text-secondary">
              Embrace the new era of outbound.
            </h5>
            <p className="mt-4 text-sm text-secondary mb-4">
              Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency.
            </p>
            <Button
              className="bg-[#0FF1F6] hover:bg-slate-700 hover:text-white transition duration-300 w-full md:w-auto"
              variant="bordered"
            >
              Sign Up for the Beta
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Embrace;
