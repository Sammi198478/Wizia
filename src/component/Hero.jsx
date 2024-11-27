import React from 'react';


// Sample Data
const MoreLeads = [
  {
    name: "AI SDRs (aiDRs)",
    heading: "More leads, less people",
    para: "",
  },
];

// Button component (if you don't have a separate one, you can use this simple version)
const Button = ({ className, variant, children }) => {
  return (
    <button
      className={`${className} ${variant === "bordered" ? 'border-2' : ''} px-6 py-3 rounded-xl font-semibold`}
    >
      {children}
    </button>
  );
};

function Hero() {
  return (
    <section className='py-12 bg-[#02242A] max-w-[1440px] '>
      <div className='container mx-auto px-6 sm:px-12 hero'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {MoreLeads.map((item, i) => (
            <div key={i} className='space-y-6'>
              <span className='text-lg text-primary font-semibold'>{item.name}</span>
              <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>{item.heading}</h1>
              <p className='text-sm text-secondary'>Train an aiDR on your ICP and messaging <br/> matrix. Activate it on a patch. It will send <br/>  personalized sequences to every target contact.</p>
              <Button className='bg-[#0FF1F6] hover:bg-slate-700 hover:text-white transition duration-300' variant="bordered">
                Sign Up for the Beta
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
