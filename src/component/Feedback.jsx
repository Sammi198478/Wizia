import React from 'react';

const reviews = [
  {
    image: "./Group9.png",
    heading: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    title: "Chief Strategy Officer @ Company",
  },
];

function Feedback() {
  return (
    <section className="py-12 max-w-[1440px] ">
      <div className="container mx-auto px-6 ">
        {/* Top section with navigation icons */}
        <div className=" relative mb-8">
        <img className="w-2 h-4 sm:w-12 absolute left-0 top-28" src="./Vector.png" alt="Left icon" />
        <img className="w-2 h-4  sm:w-12 absolute right-0 top-28" src="./Navigation.png" alt="Right icon" />
        </div>

        {/* Feedback content */}
        <div className="space-y-8">
       
          {reviews.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              {/* Review Image */}
              <img src={item.image} alt="Review" className="w-12 h-12 rounded-full mb-8 mx-auto" />
              
              {/* Review Text */}
              <h4 className="text-2xl lg:text-3xl leading-tight text-center font-bold mb-4">{item.heading}</h4>
              <p className="text-primary mb-2 text-sm">{item.name}</p>
              <span className="text-sm text-secondary">{item.title}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Feedback;
