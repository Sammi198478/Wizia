import React from 'react';

const IncrediblyItems = [
  {
    imageSource: "./Group.png",
    title: "You’re in Control",
    description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
  },
  {
    imageSource: "./Group1.png",
    title: "Infinitely Scalable",
    description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
  },
  {
    imageSource: "./Group2.png",
    title: "Incredibly Flexible",
    description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
  },
];

function Incredibly() {
  return (
    <section className="py-12 max-w-[1440px] ">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {IncrediblyItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.imageSource}
                alt={item.title}
                className="w-14 h-14 object-contain mb-4"
              />
              <h2 className="text-lg font-bold mt-4">{item.title}</h2>
              <p className="text-secondary text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Incredibly;
